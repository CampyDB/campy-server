===============
Getting Started
===============

.. contents::

External Dependencies
=====================

The CampyDB server app is a Linux app.
It has several external dependencies in order to download and run:

- `Git <https://git-scm.com/>`_
	+ required for downloading the latest stable version of the CampyDB server app from GitHub
- `Python (v2.7+; but not v3.x) <https://www.python.org/>`_
	+ required for running the CampyDB server app
- `Postgres (v9.4+) <http://www.postgresql.org/>`_
	+ for CampyDB DB
- `RabbitMQ (v3.5+) <https://www.rabbitmq.com/>`_
	+ required for Celery task queue
- `Redis (v3.0+) <http://redis.io/>`_
	+ required for caching of REST API requests
- `NCBI BLAST+ (v2.28+) <ftp://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/LATEST/>`_
	+ required for nucleotide homology searching and for running MIST
	+ must be able to run ``makeblastdb`` and ``blastn`` from the commandline
- `mono-runtime (v4.0+) <http://www.mono-project.com/docs/advanced/runtime/>`_ 
	+ for running `MIST <https://bitbucket.org/peterk87/mist>`_ 
- ``libgfortran``, ``libblas``, ``gcc``
	+ needed for compiling various Python modules and for high-performance matrix operations


.. warning::

	**Only Python 2.7+ supported for the CampyDB server app.**
	Python 3.x not supported due to some Python dependencies not being supported under Python 3.


The CampyDB server app has been successfully installed and run on the following Linux distros:

- Arch 4.0
	+ all dependencies are available through official packages through ``pacman`` or through the `Arch User Repository (AUR) <https://aur.archlinux.org/>`_
- Linux Mint 16 and 17
	+ nearly all dependencies are easily retrieved with ``apt-get``
- CentOS 5
	+ requires a lot of manual downloading and compiling from source
	+ Python 2.7+ must be set up parallel to OS version (v2.4) which is required for many system processes 


.. _PostgreSQL:

Installing PostgreSQL_ 9.4+
---------------------------

CampyDB needs at least Postgres 9.3 for JSON column support.
It is recommended to install the latest stable version of Postgres available for your Linux distro.



Installing PostgreSQL_ 9.4 on CentOS 5
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Adapted from instructions available at:
https://wiki.postgresql.org/wiki/YUM_Installation


Configure your YUM repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Locate and edit your distributions ``.repo`` file, located on CentOS:

``/etc/yum.repos.d/CentOS-Base.repo``

Append following line to ``[base]`` and ``[updates]`` sections in ``.repo`` file:

``exclude=postgresql*``

Install the appropriate PGDG RPM file from here:

http://yum.postgresql.org/repopackages.php#pg94

.. code-block:: bash

   wget http://yum.postgresql.org/9.4/redhat/rhel-5-x86_64/pgdg-centos94-9.4-1.noarch.rpm
   sudo yum localinstall pgdg-centos94-9.4-1.noarch.rpm
   sudo yum install postgresql94* 
   # or install only what's needed


Installing PostgreSQL_ 9.4 on other Linux distros
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Under Ubuntu/Linux Mint, you should be able to

.. code-block:: sh

	sudo apt-get update
	sudo apt-get install postgresql-9.4

in order to install PostgreSQL_ 9.4 assuming that your distro is up-to-date.

If it is an older release, then it may be necessary to add the official Postgres package repository for your distro.

Some instructions for doing this can be found here:

http://www.codeproject.com/Articles/898303/Installing-and-Configuring-PostgreSQL-on-Linux-Min


Setup CampyDB server app database
===============================

You will need to create a user ``campy`` and create ``campy_db`` and ``campy_test_db`` Postgres databases.

In bash, launch ``psql`` as the ``postgres`` user:

.. code-block:: sh

	sudo -u postgres psql


In ``psql``:

.. code-block:: psql

	CREATE USER campy WITH PASSWORD 'campy_password';
	CREATE DATABASE campy_db;
	GRANT ALL PRIVILEGES ON DATABASE "campy_db" to campy;
	CREATE DATABASE campy_test_db;
	GRANT ALL PRIVILEGES ON DATABASE "campy_test_db" to campy;
	\l

- ``\l`` will list all databases. ``sistr_db`` and ``sistr_test_db`` should appear in the list.

.. warning::

	You may need to install ``postgresql-contrib-9.4``.
	After installing/updating to PostgreSQL_ 9.4 install the ``contrib`` package which includes the HSTORE extension (under Ubuntu/Mint, ``sudo apt-get install postgresql-contrib-9.4``)


In ``psql``, enable/install the HSTORE extension in each CampyDB database:

.. code-block:: psql

	\c sistr_db
	CREATE EXTENSION hstore;
	\dx
	\c sistr_test_db
	CREATE EXTENSION hstore;
	\dx

- ``\c <DATABASE>`` connects to the specified DB
- ``\dx`` shows the extensions installed for the current table


Load the CampyDB database with public data
========================================

It is *highly* recommended that you download and load up a CampyDB public genome database dump into your CampyDB database.
This is a quick way of loading some pre-calculated data into your database (along with setting up database tables, relationships and indexes). 

Here's an example commandline to do load a database dump file ``campy_db-latest.sql`` into the ``campy_db`` database:

.. code-block:: sh

	sudo -u postgres psql campy_db < campy_db-latest.sql

.. warning:: 

	You will have need to setup the PostgreSQL user ``campy`` and the PostgreSQL databases ``campy_db`` and ``campy_test_db`` for the above command to work.

Setting up and Installing the CampyDB server app
==============================================

You will require `Git <https://git-scm.com/>`_ in order to download the latest stable version of the CampyDB server app from GitHub.


Downloading the CampyDB server app source code
--------------------------------------------

In order to download the source code for the CampyDB server app, you need to run the following commandline::

	git clone https://<url>.git



Installing a Python ``virtualenv``
----------------------------------

It is highly recommended to install the Python module dependencies for CampyDB into a virtual environment to prevent issues with glocally installed Python modules.

Using the Python 2.7 ``virtualenv`` on the commandline

.. code-block:: bash

	cd /path/to/campy-server/
	virtualenv .venv

If you are unsure which version of ``virtualenv`` you are using, check with the following commandline:

.. code-block:: bash

	which virtualenv

.. warning::

	Make sure you are using the Python 2.7 version of ``pip``.

To install all the Python dependencies for CampyDB, run the following commandlines:

.. code-block:: bash

   # while in the base campy-server directory
   export PYTHONPATH=$(pwd)
   source .venv/bin/activate
   pip install nose dsltools # required for parakeet
   # install all of the other Python dependencies 
   pip install -r requirements.txt


.. warning::
	
	You may be missing some external dependencies if any of the Python modules fail to install.
	Once these external dependencies have been installed try running ``pip install -r requirements.txt`` again.


Running the CampyDB server app 
===========================================

The recommended way to run the CampyDB server app is to use Supervisor_ so that if the Gunicorn_ web server or Celery_ crashes they are automatically restarted.

.. warning::

	PostgreSQL_ 9.4+, RabbitMQ_ and Redis_ must be installed, enabled and running in order for the CampyDB server app to run.



.. _Redis:

Start Redis_
------------

Redis_ is a `"key-value cache and store" <http://redis.io/>`_ that is used in CampyDB to cache requests through the REST API to improve performance and responsiveness.

To start Redis_, run the following commandline:

.. code-block:: sh
	
	redis-server

It may also be possible to enable Redis_ to start at system startup as a service depending on your Linux distro.


Install Redis_
~~~~~~~~~~~~~~

It should be possible for most current Linux distros to install Redis_ through the distro's package manager.

If not, you can download it from the official site:
http://redis.io/


.. _RabbitMQ:

Start RabbitMQ_
---------------

RabbitMQ_ is necessary for running the Celery task queue.

To start RabbitMQ_, run the following commandline (may need to ``sudo``):

.. code-block:: sh

	rabbitmq-server


Or you can enable ``rabbitmq-server`` to start on system startup as a service.


Install RabbitMQ_
~~~~~~~~~~~~~~~~~

On CentOS and other RPM-based Linux systems:

http://www.rabbitmq.com/install-rpm.html

On Ubuntu/Mint, it should be possible to get a recent version from ``apt-get``.

.. _Celery:

Start Celery task queue
------------------------

Before you start the CampyDB server app, you need to start the Celery task queue:

.. code-block:: sh

	cd /path/to/campy-server
	export PYTHONPATH=$(pwd)
	source .venv/bin/activate	

.. note::
	RabbitMQ must be running for Celery to start.


.. _Gunicorn:

Using Gunicorn
--------------

`Gunicorn <http://gunicorn.org/>`_ is a "Python WSGI HTTP Server for UNIX".
It is an easy way to get the CampyDB server app up and running quickly.

.. note::

	Redis_, RabbitMQ_ and Celery_ must be running before running the following commandlines


Here's an example of how to get CampyDB running on `localhost:5000 <http://localhost:5000>`_:

.. code-block:: sh

	cd /path/to/campy-server
	export PYTHONPATH=$(pwd)
	source .venv/bin/activate
	gunicorn -b 0.0.0.0:5000 -w 3 runp-gunicorn:flask_app


.. _Supervisor:

Using Supervisor_
---------------------

Supervisor_ can be used to easily manage and monitor processes.
It is recommended for running the CampyDB server app.


Install Supervisor_
~~~~~~~~~~~~~~~~~~~~~~~

Install Supervisor_ using ``pip``:

.. code-block:: sh

	cd /path/to/campy-server
	export PYTHONPATH=$(pwd)
	source .venv/bin/activate
	pip install supervisor


Configure ``supervisor.conf``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You'll need a ``supervisor.conf`` file to tell Supervisor_ which processes to run and monitor.

Here is an example ``supervisor.conf`` file:

.. code-block:: ini

	[supervisord]
	logfile=%(here)s/tmp/supervisord.log ; (main log file;default $CWD/supervisord.log)
	logfile_maxbytes=50MB        ; (max main logfile bytes b4 rotation;default 50MB)
	logfile_backups=10           ; (num of main logfile rotation backups;default 10)
	loglevel=trace                ; (log level;default info; others: debug,warn,trace)
	pidfile=%(here)s/tmp/supervisord.pid ; (supervisord pidfile;default supervisord.pid)
	nodaemon=false               ; (start in foreground if true;default false)
	minfds=1024                  ; (min. avail startup file descriptors;default 1024)
	minprocs=200                 ; (min. avail process descriptors;default 200)


	[inet_http_server]
	port=127.0.0.1:9001   ;

	[rpcinterface:supervisor]
	supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

	[supervisorctl]
	serverurl=http://127.0.0.1:9001 ;


	[program:redis-server]
	command=/usr/bin/redis-server

	[program:gunicorn]
	environment=PYTHONPATH="$CWD",APP_SETTINGS="%(here)s/campy-server-config.py"
	command=%(here)s/.venv/bin/gunicorn --pythonpath %(here)s -w 2 --log-level debug --bind localhost:8000 --pid tmp/gunicorn.pid --timeout 9999 runp-gunicorn:flask_app
	directory=%(here)s
	stdout_logfile=%(here)s/tmp/gunicorn-supervisord-stdout.log
	stderr_logfile=%(here)s/tmp/gunicorn-supervisord-stderr.log

	[program:celery]
	environment=PYTHONPATH=%(here)s,APP_SETTINGS="%(here)s/campy-server-config.py"
	command=%(here)s/.venv/bin/celery worker -A app.tasks --autoscale=10,4 --concurrency=1
	directory=%(here)s
	stdout_logfile=%(here)s/tmp/celery-supervisord-stdout.log
	stderr_logfile=%(here)s/tmp/celery-supervisord-stderr.log

	[program:celery-beat]
	environment=PYTHONPATH=%(here)s,APP_SETTINGS="%(here)s/campy-server-config.py"
	command=%(here)s/.venv/bin/celery beat -A app.tasks
	directory=%(here)s
	stdout_logfile=%(here)s/tmp/celery-beat-supervisord-stdout.log
	stderr_logfile=%(here)s/tmp/celery-beat-supervisord-stderr.log

.. warning::
	
	With the above ``supervisor.conf``, you will need to replace ``/path/to/campy-server/`` with your full absolute path to where you have your ``campy-server`` directory saved.


This article explains more about why running CampyDB using Supervisor_ is a great idea:

http://agiliq.com/blog/2014/05/supervisor-with-django-and-gunicorn/


Run the CampyDB unit tests
========================

To run unit tests for the CampyDB server app and ensure that *mostly* everything is configured properly, run the following commandlines:

.. code-block:: sh
	
	cd /path/to/campy-server
	./run_tests.sh


OR you can run the following:

.. code-block:: sh

	cd /path/to/campy-server
	export PYTHONPATH=$(pwd)
	.venv/bin/py.test -v -s tests/test_user.py

to specify which tests to run.

The tests are located in the ``tests`` directory under the ``campy-server`` project directory.


With ``py.test``, the ``conftest.py`` file will be loaded for each test module as needed for the necessary fixtures.