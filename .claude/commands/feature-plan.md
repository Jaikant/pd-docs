**FEATURE PLAN COMMAND**

**Variables:**
feature_spec: $ARGUMENTS

**ARGUMENTS PARSING:**
Parse the following arguments from "$ARGUMENTS":
1. `feature_spec` - Path to the file which contains specs for the feature.

**FEATURE PLANNING**
- Read the feature specification file at `feature_spec`. Then come up with a detailed implementation plan as below:  
  - The plan should follow all the rules specified in the `feature_spec`.
  - The plan should present the changes needed across the entire code base.  It should first give the list of files which are being added/modified/deleted. And then for each file it should present the changes file by file.
  - The plan should contain the rules to be followed for implementing and testing if specified in the `feature_spec`.
  - The plan should specify which agent is responsible for the implementation if provided in the `feature_spec`.
  - The plan should present the documentation changes proposed in the official documentation.


# ULTRA-THINKING DIRECTIVE
Before presenting the implementation plan, engage in extended thinking so the plan is as per 
 - The instructions in this command 
 - Covers all aspects mentioned in the `feature_spec`.

# FEATURE PLAN SAVING
When the implementation plan is ready, it should be written into the the directory in which the `feature_spec` lies.