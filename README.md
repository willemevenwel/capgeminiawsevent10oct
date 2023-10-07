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
