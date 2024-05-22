import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codecatalyst_DevEnvironmentIdes {
  // The name of the IDE. Valid values include Cloud9, IntelliJ, PyCharm, GoLand, and VSCode.
  name?: string;

  // A link to the IDE runtime image. This parameter is not required if the name is VSCode. Values of the runtime can be for example public.ecr.aws/jetbrains/py,public.ecr.aws/jetbrains/go
  runtime?: string;
}

export function codecatalyst_DevEnvironmentIdes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "runtime",
      "A link to the IDE runtime image. This parameter is not required if the name is VSCode. Values of the runtime can be for example public.ecr.aws/jetbrains/py,public.ecr.aws/jetbrains/go",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the IDE. Valid values include Cloud9, IntelliJ, PyCharm, GoLand, and VSCode.",
      [],
      false,
      false,
    ),
  ];
}
