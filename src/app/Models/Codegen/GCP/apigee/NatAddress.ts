import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NatAddressArgs {
  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  InstanceId?: string;

  // Resource ID of the NAT address.
  Name?: string;
}
export class NatAddress extends Resource {
  // Resource ID of the NAT address.
  public Name?: string;

  // State of the NAT IP address.
  public State?: string;

  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  public InstanceId?: string;

  // The allocated NAT IP address.
  public IpAddress?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The Apigee instance associated with the Apigee environment,\nin the format `organizations/{{org_name}}/instances/{{instance_name}}`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Resource ID of the NAT address.",
      ),
    ];
  }
}
