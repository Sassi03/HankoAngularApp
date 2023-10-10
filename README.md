Sample Application with Hanko Integration

To run this application locally, follow these steps:

Register Your URL with Hanko:
Go to https://cloud.hanko.io/ and create an account or log in.
Once logged in, register your local development URL with Hanko. This step is necessary for Hanko to recognize and allow requests from your local environment. 

Update the API URL in the environment configuration file to point to your Hanko integration. 

Install Dependencies:
Open a terminal/command prompt and navigate to your project directory.
Run the following command to install project dependencies using npm:

npm install

Start the Application:
After installing dependencies, you can start the application locally. Use the following 

ng serve


To containerize an Angular application and push it to a container registry like Google Artifact Registry, you need to follow these steps:


**Step 1: Build the Docker Image**

Open a terminal in the same directory as your `Dockerfile` and run the following command to build the Docker image:

docker build -t your-image-name:tag .

Replace `your-image-name` with the desired image name and `tag` with the version or tag you want to assign.

**Step 2: Authenticate to Your Container Registry**

If you're using Google Artifact Registry, you'll need to authenticate using the Google Cloud SDK. Run the following command and follow the prompts to authenticate:

gcloud auth login

**Step 3: Tag the Docker Image**

Tag the Docker image with the Artifact Registry repository path:

docker tag your-image-name:tag us-central1-docker.pkg.dev/your-project-id/your-repository/your-image-name:tag

Replace:
- `your-project-id` with your Google Cloud project ID.
- `your-repository` with the name of your Artifact Registry repository.
- `your-image-name` and `tag` with the values from Step 1.

**Step 4: Push the Docker Image**

Push the Docker image to Artifact Registry:

docker push us-central1-docker.pkg.dev/your-project-id/your-repository/your-image-name:tag

This will push the image to Google Artifact Registry.

Your Angular application is now containerized and pushed to Google Artifact Registry. You can deploy it to Google Cloud Run or any other container orchestration platform that you prefer.