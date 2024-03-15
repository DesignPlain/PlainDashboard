import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DatasetArgs {
  /*
The location for the Dataset.


- - -
*/
  Location?: string;

  // The resource name for the Dataset.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The default timezone used by this dataset. Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.
*/
  TimeZone?: string;
}
export class Dataset extends Resource {
  /*
The location for the Dataset.


- - -
*/
  public Location?: string;

  // The resource name for the Dataset.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The fully qualified name of this dataset
  public SelfLink?: string;

  /*
The default timezone used by this dataset. Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.
*/
  public TimeZone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name for the Dataset.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TimeZone",
        'The default timezone used by this dataset. Must be a either a valid IANA time zone name such as\n"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources\n(e.g., HL7 messages) where no explicit timezone is specified.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the Dataset.\n\n\n- - -",
      ),
    ];
  }
}
