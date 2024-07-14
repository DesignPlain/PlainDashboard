import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface amp_ScraperDestinationAmp {
  // The Amazon Resource Name (ARN) of the prometheus workspace.
  workspaceArn?: string;
}

export function amp_ScraperDestinationAmp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "workspaceArn",
      "The Amazon Resource Name (ARN) of the prometheus workspace.",
      [],
      true,
      false,
    ),
  ];
}
