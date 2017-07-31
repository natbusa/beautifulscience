# start from the jupyter image with R, Python, and Scala (Apache Toree) kernels pre-installed
FROM jupyter/base-notebook

USER root

RUN apt-get update -qq && \
    apt-get install -y gcc libc6-dev make libx11-dev

RUN apt-get install -y graphviz

# expose kernel gateway 
EXPOSE 8888

#no superuser from here down
USER jovyan

# add some extra packages
ADD packages /srv/
RUN pip install -r /srv/packages

# install the kernel gateway
RUN pip install jupyter_kernel_gateway
ENV JUPYTER_GATEWAY=1

#Some other python packages
RUN pip install cython
RUN pip install chardet hdbscan pydotplus
RUN pip install wordcloud

# REST API is designed as notebooks
ADD notebooks /srv/notebooks


