# Guía de Despliegue en Google Cloud Platform (GCP)

Esta guía te llevará paso a paso para desplegar el sitio web de **miFACU** en una Máquina Virtual de Google Cloud Platform usando Docker.

## Prerrequisitos

1.  Una cuenta activa de Google Cloud Platform.
2.  Acceso al dominio `mifacu.com.ar` (para configurar los DNS).
3.  El proyecto `MiFACU-Legal` en tu repositorio Git.

---

## Paso 1: Crear una Máquina Virtual (VM)

1.  Ve a la [Consola de Google Cloud](https://console.cloud.google.com/).
2.  Navega a **Compute Engine** > **Instancias de VM**.
3.  Haz clic en **Crear Instancia**.
4.  **Configuración recomendada:**
    *   **Nombre:** `mifacu-website`
    *   **Región:** `us-central1` (o la más cercana a tus usuarios, ej: `southamerica-east1` en Sao Paulo).
    *   **Tipo de máquina:** `e2-micro` (es parte del nivel gratuito y suficiente para un sitio estático).
    *   **Disco de arranque:** Cambiar a **Ubuntu 22.04 LTS** (o la versión LTS más reciente).
    *   **Firewall:** Marca las casillas **Permitir tráfico HTTP** y **Permitir tráfico HTTPS**.
5.  Haz clic en **Crear**.

---

## Paso 2: Configurar Dirección IP Estática

Para que tu dominio siempre apunte a la misma dirección, necesitas reservar una IP estática.

1.  En la consola de GCP, ve a **Red de VPC** > **Direcciones IP**.
2.  Busca la Dirección IP Externa que se le asignó a tu VM.
3.  En la columna "Tipo", cambia de "Efímera" a **Estática**.
4.  Dale un nombre (ej: `mifacu-ip`) y guarda.
5.  **Copia esta dirección IP**, la necesitarás para el dominio.

---

## Paso 3: Configurar el Dominio

1.  Ve al panel de control de tu proveedor de dominio (donde compraste `mifacu.com.ar`).
2.  Busca la configuración de **DNS**.
3.  Crea (o edita) un registro **Tipo A**:
    *   **Host/Nombre:** `@` (o déjalo vacío para la raíz).
    *   **Valor/Destino:** Pega la **Dirección IP Estática** que copiaste en el paso anterior.
    *   **TTL:** Automático o 1 hora.
4.  (Opcional) Crea un registro **CNAME** para `www`:
    *   **Host/Nombre:** `www`
    *   **Valor/Destino:** `mifacu.com.ar`

*Nota: Los cambios de DNS pueden tardar hasta 48 horas en propagarse, aunque suelen ser rápidos.*

---

## Paso 4: Preparar la VM e Instalar Docker

1.  En la lista de instancias de VM de GCP, haz clic en el botón **SSH** al lado de tu instancia `mifacu-website`. Se abrirá una terminal en tu navegador.
2.  Ejecuta los siguientes comandos para actualizar el sistema e instalar Docker:

```bash
# Actualizar repositorios
sudo apt-get update

# Instalar dependencias
sudo apt-get install -y ca-certificates curl gnupg

# Agregar la clave GPG oficial de Docker
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Configurar el repositorio
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Verificar instalación
sudo docker --version
```

---

## Paso 5: Desplegar el Sitio Web

Hay dos formas de llevar tu código a la VM: Clonando el repositorio Git o copiando los archivos. Asumiremos que usas Git.

1.  **Clonar el repositorio:**

```bash
git clone https://github.com/TU_USUARIO/MiFACU-Legal.git
cd MiFACU-Legal
```

*Nota: Si tu repo es privado, te pedirá usuario y token (o configura SSH). Si prefieres, puedes subir los archivos manualmente.*

2.  **Construir y levantar el contenedor:**

```bash
sudo docker compose up -d --build
```

3.  **Verificar que esté corriendo:**

```bash
sudo docker ps
```
Deberías ver el contenedor `mifacu-website` en estado `Up`.

---

## Paso 6: Verificación Final

1.  Abre un navegador y visita `http://TU_IP_ESTATICA` o `http://mifacu.com.ar`.
2.  Deberías ver tu nuevo sitio web funcionando.

---

## Paso 7: Configuración de SSL (HTTPS) - Recomendado

Para tener el candadito verde de seguridad (HTTPS), puedes usar **Certbot**. Como estamos usando Nginx en Docker, lo más fácil es usar un contenedor de Certbot o configurar un proxy inverso en la VM host.

**Opción rápida con Nginx Proxy Automation (si quieres HTTPS fácil):**

Si deseas configurar HTTPS automáticamente, considera usar una imagen como `nginx-proxy` con `acme-companion`, pero para este despliegue estático simple, puedes instalar Nginx directamente en la VM (sin Docker) o configurar SSL manualmente.

Si solo necesitas HTTP por ahora, ¡ya terminaste!
