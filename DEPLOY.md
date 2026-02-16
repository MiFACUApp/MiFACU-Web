# Guía de Despliegue (Deployment)

Esta guía te ayudará a desplegar la nueva versión React de MiFACU en tu VPS con HTTPS automático usando Caddy.

## Pre-requisitos
*   VPS con Docker y Docker Compose instalados.
*   Dominio apuntando a la IP del VPS.
*   Puertos 80 y 443 abiertos.

## Pasos en el Servidor (VPS)

1.  **Limpiar la versión anterior (Opcional pero recomendado)**
    Si tienes la carpeta `site` antigua, puedes moverla o borrarla para evitar confusiones.
    ```bash
    mv ~/site ~/site_backup
    ```

2.  **Clonar el Repositorio**
    ```bash
    cd ~
    git clone https://github.com/MiFACUApp/MiFACU.git
    cd MiFACU
    ```

3.  **Configurar el Dominio**
    Crea un archivo `.env` con tu dominio real.
    ```bash
    echo "DOMAIN_NAME=tudominio.com" > .env
    ```
    *Reemplaza `tudominio.com` por tu dominio real (ej: mifacu.app).*

4.  **Iniciar el Servicio**
    ```bash
    sudo docker compose up -d --build
    ```

## 🚨 Solución de Problemas (Troubleshooting)

### Error: `Bind for 0.0.0.0:80 failed: port is already allocated`

Si ves este error, significa que otro programa (Nginx antiguo, Apache, o contenedores viejos) ya está usando el puerto 80.

**Paso 1: Detener contenedores Docker antiguos**
Ejecuta esto para detener TODOS los contenedores corriendo (cuidado si tienes otras apps en el servidor):
```bash
sudo docker rm -f $(sudo docker ps -aq)
```

**Paso 2: Detener Nginx/Apache del sistema**
A veces Nginx está instalado directamente en el sistema operativo, no en Docker.
```bash
sudo systemctl stop nginx
sudo systemctl disable nginx
# O si usas Apache:
sudo systemctl stop apache2
sudo systemctl disable apache2
```

**Paso 3: Verificar puertos libres**
Asegúrate de que nada escuche en el puerto 80:
```bash
sudo lsof -i :80
# O
sudo netstat -tulpn | grep :80
```
Si no sale nada, el puerto está libre.

**Paso 4: Reintentar el despliegue**
```bash
sudo docker compose up -d --build
```

## Actualizaciones Futuras
Para actualizar el sitio cuando hagas cambios en el código:

```bash
cd ~/MiFACU
git pull origin main
sudo docker compose up -d --build
```
