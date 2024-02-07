FROM python:3.9

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY /src/requirements.txt .
COPY /src/requirements_dev.txt .

RUN pip install -r requirements.txt
RUN pip install -r requirements_dev.txt

COPY . ./

EXPOSE 8080
