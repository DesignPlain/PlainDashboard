import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionNetworkEndpointGroupAppEngine,
  compute_RegionNetworkEndpointGroupAppEngine_GetTypes,
} from "../types/compute_RegionNetworkEndpointGroupAppEngine";
import {
  compute_RegionNetworkEndpointGroupCloudFunction,
  compute_RegionNetworkEndpointGroupCloudFunction_GetTypes,
} from "../types/compute_RegionNetworkEndpointGroupCloudFunction";
import {
  compute_RegionNetworkEndpointGroupCloudRun,
  compute_RegionNetworkEndpointGroupCloudRun_GetTypes,
} from "../types/compute_RegionNetworkEndpointGroupCloudRun";
import {
  compute_RegionNetworkEndpointGroupServerlessDeployment,
  compute_RegionNetworkEndpointGroupServerlessDeployment_GetTypes,
} from "../types/compute_RegionNetworkEndpointGroupServerlessDeployment";

export interface RegionNetworkEndpointGroupArgs {
  /*
Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.
Default value is `SERVERLESS`.
Possible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.
*/
  networkEndpointType?: string;

  /*
A reference to the region where the regional NEGs reside.


- - -
*/
  region?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  appEngine?: compute_RegionNetworkEndpointGroupAppEngine;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  cloudFunction?: compute_RegionNetworkEndpointGroupCloudFunction;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  cloudRun?: compute_RegionNetworkEndpointGroupCloudRun;

  /*
This field is only used for PSC and INTERNET NEGs.
The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.
*/
  network?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.
Structure is documented below.
*/
  serverlessDeployment?: compute_RegionNetworkEndpointGroupServerlessDeployment;

  /*
This field is only used for PSC NEGs.
Optional URL of the subnetwork to which all network endpoints in the NEG belong.
*/
  subnetwork?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
This field is only used for PSC and INTERNET NEGs.
The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.
*/
  pscTargetService?: string;
}
export class RegionNetworkEndpointGroup extends Resource {
  // The URI of the created resource.
  public selfLink?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.
Structure is documented below.
*/
  public serverlessDeployment?: compute_RegionNetworkEndpointGroupServerlessDeployment;

  /*
This field is only used for PSC NEGs.
Optional URL of the subnetwork to which all network endpoints in the NEG belong.
*/
  public subnetwork?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public appEngine?: compute_RegionNetworkEndpointGroupAppEngine;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public cloudFunction?: compute_RegionNetworkEndpointGroupCloudFunction;

  /*
This field is only used for PSC and INTERNET NEGs.
The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.
*/
  public pscTargetService?: string;

  /*
A reference to the region where the regional NEGs reside.


- - -
*/
  public region?: string;

  /*
Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.
Default value is `SERVERLESS`.
Possible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.
*/
  public networkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public cloudRun?: compute_RegionNetworkEndpointGroupCloudRun;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
This field is only used for PSC and INTERNET NEGs.
The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.
*/
  public network?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cloudRun",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
        compute_RegionNetworkEndpointGroupCloudRun_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverlessDeployment",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.\nStructure is documented below.",
        compute_RegionNetworkEndpointGroupServerlessDeployment_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        "This field is only used for PSC NEGs.\nOptional URL of the subnetwork to which all network endpoints in the NEG belong.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pscTargetService",
        "This field is only used for PSC and INTERNET NEGs.\nThe target service url used to set up private service connection to\na Google API or a PSC Producer Service Attachment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudFunction",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
        compute_RegionNetworkEndpointGroupCloudFunction_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "A reference to the region where the regional NEGs reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "appEngine",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
        compute_RegionNetworkEndpointGroupAppEngine_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        'This field is only used for PSC and INTERNET NEGs.\nThe URL of the network to which all network endpoints in the NEG belong. Uses\n"default" project network if unspecified.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkEndpointType",
        "Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.\nDefault value is `SERVERLESS`.\nPossible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.",
        [],
        false,
        true,
      ),
    ];
  }
}
