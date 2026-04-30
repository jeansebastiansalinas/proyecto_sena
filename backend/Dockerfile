# backend/Dockerfile

FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# instalar netcat para comprobar conexión a postgres
RUN apt-get update && apt-get install -y netcat-openbsd

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# permisos de ejecución
RUN chmod +x wait-for-db.sh

CMD ["./wait-for-db.sh"]