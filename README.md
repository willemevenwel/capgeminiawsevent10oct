# capgeminiawsevent10oct
This is the repo for the nodejs expressjs docker example project for the Capgemini AWS Event held on 10 October 2023

Run locally:
npm start_local
npm start_dev
npm start_prod

Build Docker Image:
docker build . -t <username>/<imagename>-<environment> --target <environment>
docker build . -t willemevenwel/capgeminiawsevent10oct2023-local --target local
docker build . -t willemevenwel/capgeminiawsevent10oct2023-dev --target dev
docker build . -t willemevenwel/capgeminiawsevent10oct2023-prod --target prod

Run Docker Image:
docker run -p 3000:3000 -d <username>/<imagename>

docker run -p 80:3000 -d  willemevenwel/capgeminiawsevent10oct2023


Steps to Deploy Container to AWS ECR

1. Retrieve an authentication token and authenticate your Docker client to your registry.
Use the AWS CLI:

aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 369729634060.dkr.ecr.eu-central-1.amazonaws.com
Note: if you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.

2. Build your Docker image using the following command. For information on building a Docker file from scratch, see the instructions here . You can skip this step if your image has already been built:

docker build -t capgeminiaws10oct .

3. After the build is completed, tag your image so you can push the image to this repository:

docker tag capgeminiaws10oct:latest 369729634060.dkr.ecr.eu-central-1.amazonaws.com/capgeminiaws10oct:latest

4. Run the following command to push this image to your newly created AWS repository:

docker push 369729634060.dkr.ecr.eu-central-1.amazonaws.com/capgeminiaws10oct:latest

Commands to deploy dev environment:
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 369729634060.dkr.ecr.eu-central-1.amazonaws.com
docker build -t capgeminiaws10oct2023-dev . --target dev
docker tag capgeminiaws10oct2023-dev:latest 369729634060.dkr.ecr.eu-central-1.amazonaws.com/capgeminiaws10oct:latest
docker push 369729634060.dkr.ecr.eu-central-1.amazonaws.com/capgeminiaws10oct:latest


Docker image healthcheck:
CMD-SHELL,curl - f http://localhost:3000/ || exit 1⁠
