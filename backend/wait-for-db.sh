#!/bin/sh

echo "Esperando PostgreSQL..."

while ! nc -z db 5432; do
  sleep 1
done

echo "PostgreSQL conectado"

echo "Aplicando migraciones..."
python manage.py migrate

echo "Iniciando Django..."
python manage.py runserver 0.0.0.0:8000