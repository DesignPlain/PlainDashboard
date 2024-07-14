import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SourceArgs {
  // The description of the source (max of 1024 characters).
  description?: string;

  /*
The source’s display name. A source’s display name must be unique
amongst its siblings, for example, two sources with the same parent
can't share the same display name. The display name must start and end
with a letter or digit, may contain letters, digits, spaces, hyphens,
and underscores, and can be no longer than 32 characters.
*/
  displayName?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  organization?: string;
}
export class Source extends Resource {
  // The description of the source (max of 1024 characters).
  public description?: string;

  /*
The source’s display name. A source’s display name must be unique
amongst its siblings, for example, two sources with the same parent
can't share the same display name. The display name must start and end
with a letter or digit, may contain letters, digits, spaces, hyphens,
and underscores, and can be no longer than 32 characters.
*/
  public displayName?: string;

  /*
The resource name of this source, in the format
`organizations/{{organization}}/sources/{{source}}`.
*/
  public name?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public organization?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the source (max of 1024 characters).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The source’s display name. A source’s display name must be unique\namongst its siblings, for example, two sources with the same parent\ncan't share the same display name. The display name must start and end\nwith a letter or digit, may contain letters, digits, spaces, hyphens,\nand underscores, and can be no longer than 32 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
