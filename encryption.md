# Encryption Model

We have 2 potential encryption models that we may implement. We are likely opting for **Model 2** as it is more feasible to implement given our time constraints.

## Model 1
Users store data locally and we deliver the decryption keys necessary to view the data. This ensures we cannot access their data, but may be very complicated to implement.

## Model 2 
We hold the encryption and decryption keys for users' data and securely deliver them to others with permissions set by the owner. This is slightly less secure since we hold the keys, but it should be easier to implement. We may implement this method first and use it as a stepping stone for future development.

//TODO: Update as we finalize which model we use.

## Graphical Comparison
Model 1            |  Model 2
:-------------------------:|:-------------------------:
![Model1](./images/encryption2.png)  |  ![Model2](./images/encryption1.png)