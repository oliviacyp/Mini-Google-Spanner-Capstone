# Distributed Systems Capstone Project
## Google Spanner (Single-Split Write)

Theoretically, if this code had been completed (spoiler - it's not 😃) it would :

Through a series of console-logging at each step, this application illustrates the process of a writing to a single split with Google Spanner. The test suite includes various failure scenarios and detailed logging at each step to show how the design is ultimately able to maintain consistency.

### Objective:
Explore Google Cloud Spanner, a complex distributed database system, through a simplified model to further explore the space of distributed systems.

### The Problem:
- Implement a single-split write process in Google Spanner for inserting a new row into a designated split of a table.
- Ensure a high level of consistency, guaranteeing the order of transactions aligns with changes to the data.

### Changes to [Original Design](https://github.com/oliviacyp/Mini-Google-Spanner-Capstone/files/13577638/Capstone.Design.pdf):
- Arbritarily used Typescript instead of Java
- Largely remained consistent, but design lacked detail
