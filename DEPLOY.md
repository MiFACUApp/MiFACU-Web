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

## Verificación
*   Accede a `https://tudominio.com`.
*   Caddy generará automáticamente el certificado SSL.

## Actualizaciones Futuras
Para actualizar el sitio cuando hagas cambios en el código:

```bash
cd ~/MiFACU
git pull origin main
sudo docker compose up -d --build
```
