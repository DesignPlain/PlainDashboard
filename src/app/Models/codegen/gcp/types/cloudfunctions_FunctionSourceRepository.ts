import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfunctions_FunctionSourceRepository {
  /*
The URL pointing to the hosted repository where the function is defined. There are supported Cloud Source Repository URLs in the following formats:

- To refer to a specific commit: `https://source.developers.google.com/projects/-/repos/-/revisions/-/paths/-`
- To refer to a moveable alias (branch): `https://source.developers.google.com/projects/-/repos/-/moveable-aliases/-/paths/-`. To refer to HEAD, use the `master` moveable alias.
- To refer to a specific fixed alias (tag): `https://source.developers.google.com/projects/-/repos/-/fixed-aliases/-/paths/-`
*/
  url?: string;

  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  deployedUrl?: string;
}

export function cloudfunctions_FunctionSourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL pointing to the hosted repository where the function is defined. There are supported Cloud Source Repository URLs in the following formats:\n\n* To refer to a specific commit: `https://source.developers.google.com/projects/*/repos/*/revisions/*/paths/*`\n* To refer to a moveable alias (branch): `https://source.developers.google.com/projects/*/repos/*/moveable-aliases/*/paths/*`. To refer to HEAD, use the `master` moveable alias.\n* To refer to a specific fixed alias (tag): `https://source.developers.google.com/projects/*/repos/*/fixed-aliases/*/paths/*`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deployedUrl",
      "The URL pointing to the hosted repository where the function was defined at the time of deployment.",
      () => [],
      false,
      false,
    ),
  ];
}
