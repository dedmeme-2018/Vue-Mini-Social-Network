# Pipeline Details

Our pipeline was designed with several motivating principles outlined below.

**Decision philosophy**
* There is rarely one right ansewr- consider all the tradeoffs
* Choose what's best for the product while making sure we can develop without much difficulty or roadblocks

**Factors affecting our decision**
* Performance
* Support across browsers and devices
* Learning curve
* Documentation and support

**Pipeline Goals**
* Fast for setup and deployment
* Simple
* Robust

## Overview

![Overview](../images/pipeline1.png)


## Frontend Framework 
Our framework of choice for this project is once again **Vue**. 

### Vue
Initially, we chose Vue as our framework due to the perceived smaller learning curve and lightweight nature. As we switched our project back to Vue, we learned that our initial impressions were true. We have thus been able to make much quicker progress working with Vue. 

### React
We attempted to switch our framework to React prior to this. This decision was made due to the lack of social network libraries for Vue. We learned that the popularity of a framework was much more important than anticipated. React's popularity is evident from the more abundant third-party libraries and tools available. However, the React Social Network we were working with was not well documented and very difficult to build upon.


## Testing
### Jest
We chose Jest for testing due to ease of setup. It has all the required functionality for our purposes and needs a minimal amount of work to operate.

## Continuous Integration
### Travis CI
Travis is a popular and solid choice for CI. It was free to students and works well with Node. It also automatically deploys to Firebase and has solid documentation. All in all, the setup was painless and easy to use.


## Documentation
### Docsify
Docsify was chosen for its ease of use. It simply reads markdown files and compiles them into a nice-looking site that can be hosted on a multitude of platforms including Github Pages.  