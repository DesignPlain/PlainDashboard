import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_ClusterAutoTerminationPolicy,
  emr_ClusterAutoTerminationPolicy_GetTypes,
} from "../types/emr_ClusterAutoTerminationPolicy";
import {
  emr_ClusterCoreInstanceFleet,
  emr_ClusterCoreInstanceFleet_GetTypes,
} from "../types/emr_ClusterCoreInstanceFleet";
import {
  emr_ClusterEc2Attributes,
  emr_ClusterEc2Attributes_GetTypes,
} from "../types/emr_ClusterEc2Attributes";
import {
  emr_ClusterMasterInstanceGroup,
  emr_ClusterMasterInstanceGroup_GetTypes,
} from "../types/emr_ClusterMasterInstanceGroup";
import {
  emr_ClusterBootstrapAction,
  emr_ClusterBootstrapAction_GetTypes,
} from "../types/emr_ClusterBootstrapAction";
import {
  emr_ClusterPlacementGroupConfig,
  emr_ClusterPlacementGroupConfig_GetTypes,
} from "../types/emr_ClusterPlacementGroupConfig";
import {
  emr_ClusterMasterInstanceFleet,
  emr_ClusterMasterInstanceFleet_GetTypes,
} from "../types/emr_ClusterMasterInstanceFleet";
import {
  emr_ClusterStep,
  emr_ClusterStep_GetTypes,
} from "../types/emr_ClusterStep";
import {
  emr_ClusterCoreInstanceGroup,
  emr_ClusterCoreInstanceGroup_GetTypes,
} from "../types/emr_ClusterCoreInstanceGroup";
import {
  emr_ClusterKerberosAttributes,
  emr_ClusterKerberosAttributes_GetTypes,
} from "../types/emr_ClusterKerberosAttributes";

export interface ClusterArgs {
  // An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. See Auto Termination Policy Below.
  autoTerminationPolicy?: emr_ClusterAutoTerminationPolicy;

  // Whether whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster. Default value is `false`.
  unhealthyNodeReplacement?: boolean;

  // Configuration block to use an [Instance Fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) for the core node type. Cannot be specified if any `core_instance_group` configuration blocks are set. Detailed below.
  coreInstanceFleet?: emr_ClusterCoreInstanceFleet;

  // Switch on/off run cluster with no steps or when all steps are complete (default is on)
  keepJobFlowAliveWhenNoSteps?: boolean;

  // List of steps to run when creating the cluster. See below. It is highly recommended to utilize the lifecycle resource options block with `ignoreChanges` if other steps are being managed outside of this provider.
  steps?: Array<emr_ClusterStep>;

  // list of tags to apply to the EMR Cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater.
  securityConfiguration?: string;

  /*
IAM role that will be assumed by the Amazon EMR service to access AWS resources.

The following arguments are optional:
*/
  serviceRole?: string;

  // Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core).
  coreInstanceGroup?: emr_ClusterCoreInstanceGroup;

  // Attributes for the EC2 instances running the job flow. See below.
  ec2Attributes?: emr_ClusterEc2Attributes;

  // S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created.
  logUri?: string;

  // Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master).
  masterInstanceGroup?: emr_ClusterMasterInstanceGroup;

  // Kerberos configuration for the cluster. See below.
  kerberosAttributes?: emr_ClusterKerberosAttributes;

  // Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default value is `true`.
  visibleToAllUsers?: boolean;

  // Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. See below.
  bootstrapActions?: Array<emr_ClusterBootstrapAction>;

  // List of configurations supplied for the EMR cluster you are creating. Supply a configuration object for applications to override their default configuration. See [AWS Documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) for more information.
  configurations?: string;

  // The specified placement group configuration for an Amazon EMR cluster.
  placementGroupConfigs?: Array<emr_ClusterPlacementGroupConfig>;

  // Release label for the Amazon EMR release.
  releaseLabel?: string;

  // Number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater (default is 1).
  stepConcurrencyLevel?: number;

  // JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore the provider cannot detect drift from the actual EMR cluster if its value is changed outside the provider.
  additionalInfo?: string;

  // Custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
  customAmiId?: string;

  // Name of the job flow.
  name?: string;

  // Way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
  scaleDownBehavior?: string;

  // Configuration block to use an [Instance Fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) for the master node type. Cannot be specified if any `master_instance_group` configuration blocks are set. Detailed below.
  masterInstanceFleet?: emr_ClusterMasterInstanceFleet;

  // Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
  terminationProtection?: boolean;

  // A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the [Amazon EMR Release Guide](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html).
  applications?: Array<string>;

  // Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
  ebsRootVolumeSize?: number;

  // List of [step states](https://docs.aws.amazon.com/emr/latest/APIReference/API_StepStatus.html) used to filter returned steps
  listStepsStates?: Array<string>;

  // AWS KMS customer master key (CMK) key ID or arn used for encrypting log files. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0.
  logEncryptionKmsKeyId?: string;

  // IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
  autoscalingRole?: string;

  /*
JSON string for supplying list of configurations for the EMR cluster.

> --NOTE on `configurations_json`:-- If the `Configurations` value is empty then you should skip the `Configurations` field instead of providing an empty list as a value, `"Configurations": []`.

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const cluster = new aws.emr.Cluster("cluster", {configurationsJson: `[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
`});
```
```python
import pulumi
import pulumi_aws as aws

cluster = aws.emr.Cluster("cluster", configurations_json="""[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
""")
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var cluster = new Aws.Emr.Cluster("cluster", new()
    {
        ConfigurationsJson = @"[
{
""Classification"": ""hadoop-env"",
""Configurations"": [
{
""Classification"": ""export"",
""Properties"": {
""JAVA_HOME"": ""/usr/lib/jvm/java-1.8.0""
}
}
],
""Properties"": {}
}
]
",
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/emr"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := emr.NewCluster(ctx, "cluster", &emr.ClusterArgs{
			ConfigurationsJson: pulumi.String(`[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
`),
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```
```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.emr.Cluster;
import com.pulumi.aws.emr.ClusterArgs;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
    public static void main(String[] args) {
        Pulumi.run(App::stack);
    }

    public static void stack(Context ctx) {
        var cluster = new Cluster("cluster", ClusterArgs.builder()
            .configurationsJson("""
[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
            """)
            .build());

    }
}
```
```yaml
resources:
  cluster:
    type: aws:emr:Cluster
    properties:
      configurationsJson: |
        [
        {
        "Classification": "hadoop-env",
        "Configurations": [
        {
        "Classification": "export",
        "Properties": {
        "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
        }
        }
        ],
        "Properties": {}
        }
        ]
```
<!--End PulumiCodeChooser -->
*/
  configurationsJson?: string;
}
export class Cluster extends DS_Resource {
  // S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created.
  public logUri?: string;

  // A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the [Amazon EMR Release Guide](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html).
  public applications?: Array<string>;

  // Custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
  public customAmiId?: string;

  // Name of the job flow.
  public name?: string;

  // The specified placement group configuration for an Amazon EMR cluster.
  public placementGroupConfigs?: Array<emr_ClusterPlacementGroupConfig>;

  // Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
  public terminationProtection?: boolean;

  // Configuration block to use an [Instance Fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) for the core node type. Cannot be specified if any `core_instance_group` configuration blocks are set. Detailed below.
  public coreInstanceFleet?: emr_ClusterCoreInstanceFleet;

  // List of [step states](https://docs.aws.amazon.com/emr/latest/APIReference/API_StepStatus.html) used to filter returned steps
  public listStepsStates?: Array<string>;

  // Configuration block to use an [Instance Fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) for the master node type. Cannot be specified if any `master_instance_group` configuration blocks are set. Detailed below.
  public masterInstanceFleet?: emr_ClusterMasterInstanceFleet;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public clusterState?: string;

  // List of configurations supplied for the EMR cluster you are creating. Supply a configuration object for applications to override their default configuration. See [AWS Documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) for more information.
  public configurations?: string;

  // Switch on/off run cluster with no steps or when all steps are complete (default is on)
  public keepJobFlowAliveWhenNoSteps?: boolean;

  // Number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater (default is 1).
  public stepConcurrencyLevel?: number;

  // list of tags to apply to the EMR Cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Whether whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster. Default value is `false`.
  public unhealthyNodeReplacement?: boolean;

  // The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.
  public masterPublicDns?: string;

  // JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore the provider cannot detect drift from the actual EMR cluster if its value is changed outside the provider.
  public additionalInfo?: string;

  // ARN of the cluster.
  public arn?: string;

  // An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. See Auto Termination Policy Below.
  public autoTerminationPolicy?: emr_ClusterAutoTerminationPolicy;

  // Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. See below.
  public bootstrapActions?: Array<emr_ClusterBootstrapAction>;

  // Attributes for the EC2 instances running the job flow. See below.
  public ec2Attributes?: emr_ClusterEc2Attributes;

  // Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master).
  public masterInstanceGroup?: emr_ClusterMasterInstanceGroup;

  // Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
  public ebsRootVolumeSize?: number;

  // AWS KMS customer master key (CMK) key ID or arn used for encrypting log files. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0.
  public logEncryptionKmsKeyId?: string;

  /*
IAM role that will be assumed by the Amazon EMR service to access AWS resources.

The following arguments are optional:
*/
  public serviceRole?: string;

  // List of steps to run when creating the cluster. See below. It is highly recommended to utilize the lifecycle resource options block with `ignoreChanges` if other steps are being managed outside of this provider.
  public steps?: Array<emr_ClusterStep>;

  // IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
  public autoscalingRole?: string;

  // Kerberos configuration for the cluster. See below.
  public kerberosAttributes?: emr_ClusterKerberosAttributes;

  // Release label for the Amazon EMR release.
  public releaseLabel?: string;

  /*
JSON string for supplying list of configurations for the EMR cluster.

> --NOTE on `configurations_json`:-- If the `Configurations` value is empty then you should skip the `Configurations` field instead of providing an empty list as a value, `"Configurations": []`.

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const cluster = new aws.emr.Cluster("cluster", {configurationsJson: `[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
`});
```
```python
import pulumi
import pulumi_aws as aws

cluster = aws.emr.Cluster("cluster", configurations_json="""[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
""")
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var cluster = new Aws.Emr.Cluster("cluster", new()
    {
        ConfigurationsJson = @"[
{
""Classification"": ""hadoop-env"",
""Configurations"": [
{
""Classification"": ""export"",
""Properties"": {
""JAVA_HOME"": ""/usr/lib/jvm/java-1.8.0""
}
}
],
""Properties"": {}
}
]
",
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/emr"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := emr.NewCluster(ctx, "cluster", &emr.ClusterArgs{
			ConfigurationsJson: pulumi.String(`[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
`),
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```
```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.emr.Cluster;
import com.pulumi.aws.emr.ClusterArgs;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
    public static void main(String[] args) {
        Pulumi.run(App::stack);
    }

    public static void stack(Context ctx) {
        var cluster = new Cluster("cluster", ClusterArgs.builder()
            .configurationsJson("""
[
{
"Classification": "hadoop-env",
"Configurations": [
{
"Classification": "export",
"Properties": {
"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
}
}
],
"Properties": {}
}
]
            """)
            .build());

    }
}
```
```yaml
resources:
  cluster:
    type: aws:emr:Cluster
    properties:
      configurationsJson: |
        [
        {
        "Classification": "hadoop-env",
        "Configurations": [
        {
        "Classification": "export",
        "Properties": {
        "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
        }
        }
        ],
        "Properties": {}
        }
        ]
```
<!--End PulumiCodeChooser -->
*/
  public configurationsJson?: string;

  // Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core).
  public coreInstanceGroup?: emr_ClusterCoreInstanceGroup;

  // Way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
  public scaleDownBehavior?: string;

  // Security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater.
  public securityConfiguration?: string;

  // Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default value is `true`.
  public visibleToAllUsers?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "terminationProtection",
        "Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "applications",
        "A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the [Amazon EMR Release Guide](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html).",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "listStepsStates",
        "List of [step states](https://docs.aws.amazon.com/emr/latest/APIReference/API_StepStatus.html) used to filter returned steps",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityConfiguration",
        "Security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "logUri",
        "S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "masterInstanceGroup",
        "Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master).",
        () => emr_ClusterMasterInstanceGroup_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurations",
        "List of configurations supplied for the EMR cluster you are creating. Supply a configuration object for applications to override their default configuration. See [AWS Documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) for more information.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customAmiId",
        "Custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoscalingRole",
        "IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "stepConcurrencyLevel",
        "Number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater (default is 1).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "masterInstanceFleet",
        "Configuration block to use an [Instance Fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) for the master node type. Cannot be specified if any `master_instance_group` configuration blocks are set. Detailed below.",
        () => emr_ClusterMasterInstanceFleet_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "unhealthyNodeReplacement",
        "Whether whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster. Default value is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "list of tags to apply to the EMR Cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ec2Attributes",
        "Attributes for the EC2 instances running the job flow. See below.",
        () => emr_ClusterEc2Attributes_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "visibleToAllUsers",
        "Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default value is `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "placementGroupConfigs",
        "The specified placement group configuration for an Amazon EMR cluster.",
        () => emr_ClusterPlacementGroupConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "coreInstanceFleet",
        "Configuration block to use an [Instance Fleet](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html) for the core node type. Cannot be specified if any `core_instance_group` configuration blocks are set. Detailed below.",
        () => emr_ClusterCoreInstanceFleet_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "keepJobFlowAliveWhenNoSteps",
        "Switch on/off run cluster with no steps or when all steps are complete (default is on)",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the job flow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "logEncryptionKmsKeyId",
        "AWS KMS customer master key (CMK) key ID or arn used for encrypting log files. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationsJson",
        'JSON string for supplying list of configurations for the EMR cluster.\n\n> **NOTE on `configurations_json`:** If the `Configurations` value is empty then you should skip the `Configurations` field instead of providing an empty list as a value, `"Configurations": []`.\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst cluster = new aws.emr.Cluster("cluster", {configurationsJson: `[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n`});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\ncluster = aws.emr.Cluster("cluster", configurations_json="""[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n""")\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var cluster = new Aws.Emr.Cluster("cluster", new()\n    {\n        ConfigurationsJson = @"[\n{\n""Classification"": ""hadoop-env"",\n""Configurations"": [\n{\n""Classification"": ""export"",\n""Properties"": {\n""JAVA_HOME"": ""/usr/lib/jvm/java-1.8.0""\n}\n}\n],\n""Properties"": {}\n}\n]\n",\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/emr"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := emr.NewCluster(ctx, "cluster", &emr.ClusterArgs{\n\t\t\tConfigurationsJson: pulumi.String(`[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n`),\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.emr.Cluster;\nimport com.pulumi.aws.emr.ClusterArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        var cluster = new Cluster("cluster", ClusterArgs.builder()\n            .configurationsJson("""\n[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n            """)\n            .build());\n\n    }\n}\n```\n```yaml\nresources:\n  cluster:\n    type: aws:emr:Cluster\n    properties:\n      configurationsJson: |\n        [\n        {\n        "Classification": "hadoop-env",\n        "Configurations": [\n        {\n        "Classification": "export",\n        "Properties": {\n        "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n        }\n        }\n        ],\n        "Properties": {}\n        }\n        ]\n```\n<!--End PulumiCodeChooser -->',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ebsRootVolumeSize",
        "Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kerberosAttributes",
        "Kerberos configuration for the cluster. See below.",
        () => emr_ClusterKerberosAttributes_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scaleDownBehavior",
        "Way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoTerminationPolicy",
        "An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. See Auto Termination Policy Below.",
        () => emr_ClusterAutoTerminationPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceRole",
        "IAM role that will be assumed by the Amazon EMR service to access AWS resources.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "coreInstanceGroup",
        "Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core).",
        () => emr_ClusterCoreInstanceGroup_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "bootstrapActions",
        "Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. See below.",
        () => emr_ClusterBootstrapAction_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "additionalInfo",
        "JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore the provider cannot detect drift from the actual EMR cluster if its value is changed outside the provider.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "steps",
        "List of steps to run when creating the cluster. See below. It is highly recommended to utilize the lifecycle resource options block with `ignoreChanges` if other steps are being managed outside of this provider.",
        () => emr_ClusterStep_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "releaseLabel",
        "Release label for the Amazon EMR release.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
