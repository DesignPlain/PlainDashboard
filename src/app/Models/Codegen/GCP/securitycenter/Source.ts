import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SourceArgs {
  // The description of the source (max of 1024 characters).
  Description?: string;

  /*
The source’s display name. A source’s display name must be unique
amongst its siblings, for example, two sources with the same parent
can't share the same display name. The display name must start and end
with a letter or digit, may contain letters, digits, spaces, hyphens,
and underscores, and can be no longer than 32 characters.
*/
  DisplayName?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  Organization?: string;
}
export class Source extends Resource {
  /*
The source’s display name. A source’s display name must be unique
amongst its siblings, for example, two sources with the same parent
can't share the same display name. The display name must start and end
with a letter or digit, may contain letters, digits, spaces, hyphens,
and underscores, and can be no longer than 32 characters.
*/
  public DisplayName?: string;

  /*
The resource name of this source, in the format
`organizations/{{organization}}/sources/{{source}}`.
*/
  public Name?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public Organization?: string;

  // The description of the source (max of 1024 characters).
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the source (max of 1024 characters).",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The source’s display name. A source’s display name must be unique\namongst its siblings, for example, two sources with the same parent\ncan't share the same display name. The display name must start and end\nwith a letter or digit, may contain letters, digits, spaces, hyphens,\nand underscores, and can be no longer than 32 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
      ),
    ];
  }
}
