FROM python:3.8-slim-buster

WORKDIR /src

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

COPY requirements.txt .

RUN python -m pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . .

# CMD ["python", "python manage.py runserver"]