## Installing the app using a Scratch Org

1. Set up your environment:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

    ```
    sfdx auth:web:login -d -a myhuborg
    ```

1. Clone the lwc-recipes repository:

    ```
    git clone git@github.com:itava0/TipCalculator.git
    cd TipsCalculator
    ```

1. Create a scratch org and provide it with an alias (**tipCalculator** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a tipCalculator
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```
1. Open the scratch org:

    ```
    sfdx force:org:open
    ```

