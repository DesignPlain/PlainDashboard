import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_MLTransformParametersFindMatchesParameters,
  glue_MLTransformParametersFindMatchesParameters_GetTypes,
} from "./glue_MLTransformParametersFindMatchesParameters";

export interface glue_MLTransformParameters {
  // The parameters for the find matches algorithm. see Find Matches Parameters.
  findMatchesParameters?: glue_MLTransformParametersFindMatchesParameters;

  // The type of machine learning transform. For information about the types of machine learning transforms, see [Creating Machine Learning Transforms](http://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html).
  transformType?: string;
}

export function glue_MLTransformParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "findMatchesParameters",
      "The parameters for the find matches algorithm. see Find Matches Parameters.",
      glue_MLTransformParametersFindMatchesParameters_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transformType",
      "The type of machine learning transform. For information about the types of machine learning transforms, see [Creating Machine Learning Transforms](http://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html).",
      [],
      true,
      false,
    ),
  ];
}
