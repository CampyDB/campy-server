'''
Celery task queue configuration file
------------------------------------

Broker and result backend needs to be RabbitMQ (amqp).

Regular tasks are queued by interaction through the REST API.

celerybeat will be used to queue scheduled tasks such as:
- removal of users and genomes from the DB after temporary user expiration
- writing new allele fasta files to disk for use by MIST
'''

BROKER_URL = 'amqp://'
CELERY_RESULT_BACKEND = 'amqp://'

CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TIMEZONE = 'America/Winnipeg'
CELERY_ENABLE_UTC = True
CELERYD_FORCE_EXECV = True

from celery.schedules import crontab

CELERYBEAT_SCHEDULE = {
    'campy_db-write_mist_alleles': {
        'task': 'app.tasks.write_mist_alleles',
        'schedule': crontab(minute=0, hour=0),
        'args': []
    },
    'campy_db-delete_old_tmp_users': {
        'task': 'app.tasks.delete_old_tmp_users',
        'schedule': crontab(minute=0, hour=12),
        'args': []
    },
}
