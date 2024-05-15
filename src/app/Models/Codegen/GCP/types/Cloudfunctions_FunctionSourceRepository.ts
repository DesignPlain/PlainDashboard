import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudfunctions_FunctionSourceRepository {
  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  DeployedUrl?: string;

  /*
The URL pointing to the hosted repository where the function is defined. There are supported Cloud Source Repository URLs in the following formats:

- To refer to a specific commit: `https://source.developers.google.com/projects/-/repos/-/revisions/-/paths/-`
- To refer to a moveable alias (branch): `https://source.developers.google.com/projects/-/repos/-/moveable-aliases/-/paths/-`. To refer to HEAD, use the `master` moveable alias.
- To refer to a specific fixed alias (tag): `https://source.developers.google.com/projects/-/repos/-/fixed-aliases/-/paths/-`
*/
  Url?: string;
}

export function Cloudfunctions_FunctionSourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeployedUrl",
      "The URL pointing to the hosted repository where the function was defined at the time of deployment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The URL pointing to the hosted repository where the function is defined. There are supported Cloud Source Repository URLs in the following formats:\n\n* To refer to a specific commit: `https://source.developers.google.com/projects/*/repos/*/revisions/*/paths/*`\n* To refer to a moveable alias (branch): `https://source.developers.google.com/projects/*/repos/*/moveable-aliases/*/paths/*`. To refer to HEAD, use the `master` moveable alias.\n* To refer to a specific fixed alias (tag): `https://source.developers.google.com/projects/*/repos/*/fixed-aliases/*/paths/*`",
      [],
      true,
      false,
    ),
  ];
}
