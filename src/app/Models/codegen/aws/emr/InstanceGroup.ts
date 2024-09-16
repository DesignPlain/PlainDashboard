import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emr_InstanceGroupEbsConfig,
  emr_InstanceGroupEbsConfig_GetTypes,
} from '../types/emr_InstanceGroupEbsConfig';

export interface InstanceGroupArgs {
  // target number of instances for the instance group. defaults to 0.
  instanceCount?: number;

  /*
A JSON string for supplying list of configurations specific to the EMR instance group. Note that this can only be changed when using EMR release 5.21 or later.

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const task = new aws.emr.InstanceGroup("task", {configurationsJson: `[
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

task = aws.emr.InstanceGroup("task", configurations_json="""[
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
    var task = new Aws.Emr.InstanceGroup("task", new()
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
		_, err := emr.NewInstanceGroup(ctx, "task", &emr.InstanceGroupArgs{
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
import com.pulumi.aws.emr.InstanceGroup;
import com.pulumi.aws.emr.InstanceGroupArgs;
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
        var task = new InstanceGroup("task", InstanceGroupArgs.builder()
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
  task:
    type: aws:emr:InstanceGroup
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

  // One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
  ebsConfigs?: Array<emr_InstanceGroupEbsConfig>;

  // Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
  ebsOptimized?: boolean;

  // The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
  instanceType?: string;

  // Human friendly name given to the instance group. Changing this forces a new resource to be created.
  name?: string;

  // The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
  autoscalingPolicy?: string;

  // If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
  bidPrice?: string;

  // ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
  clusterId?: string;
}
export class InstanceGroup extends DS_Resource {
  // ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
  public clusterId?: string;

  /*
A JSON string for supplying list of configurations specific to the EMR instance group. Note that this can only be changed when using EMR release 5.21 or later.

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const task = new aws.emr.InstanceGroup("task", {configurationsJson: `[
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

task = aws.emr.InstanceGroup("task", configurations_json="""[
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
    var task = new Aws.Emr.InstanceGroup("task", new()
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
		_, err := emr.NewInstanceGroup(ctx, "task", &emr.InstanceGroupArgs{
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
import com.pulumi.aws.emr.InstanceGroup;
import com.pulumi.aws.emr.InstanceGroupArgs;
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
        var task = new InstanceGroup("task", InstanceGroupArgs.builder()
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
  task:
    type: aws:emr:InstanceGroup
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

  // One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
  public ebsConfigs?: Array<emr_InstanceGroupEbsConfig>;

  // Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
  public ebsOptimized?: boolean;

  // target number of instances for the instance group. defaults to 0.
  public instanceCount?: number;

  // The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
  public instanceType?: string;

  // Human friendly name given to the instance group. Changing this forces a new resource to be created.
  public name?: string;

  // The number of instances currently running in this instance group.
  public runningInstanceCount?: number;

  // The current status of the instance group.
  public status?: string;

  // The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
  public autoscalingPolicy?: string;

  // If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
  public bidPrice?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Human friendly name given to the instance group. Changing this forces a new resource to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'autoscalingPolicy',
        'The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ebsConfigs',
        'One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.',
        () => emr_InstanceGroupEbsConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'configurationsJson',
        'A JSON string for supplying list of configurations specific to the EMR instance group. Note that this can only be changed when using EMR release 5.21 or later.\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst task = new aws.emr.InstanceGroup("task", {configurationsJson: `[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n`});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\ntask = aws.emr.InstanceGroup("task", configurations_json="""[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n""")\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var task = new Aws.Emr.InstanceGroup("task", new()\n    {\n        ConfigurationsJson = @"[\n{\n""Classification"": ""hadoop-env"",\n""Configurations"": [\n{\n""Classification"": ""export"",\n""Properties"": {\n""JAVA_HOME"": ""/usr/lib/jvm/java-1.8.0""\n}\n}\n],\n""Properties"": {}\n}\n]\n",\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/emr"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := emr.NewInstanceGroup(ctx, "task", &emr.InstanceGroupArgs{\n\t\t\tConfigurationsJson: pulumi.String(`[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n`),\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.emr.InstanceGroup;\nimport com.pulumi.aws.emr.InstanceGroupArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        var task = new InstanceGroup("task", InstanceGroupArgs.builder()\n            .configurationsJson("""\n[\n{\n"Classification": "hadoop-env",\n"Configurations": [\n{\n"Classification": "export",\n"Properties": {\n"JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n}\n}\n],\n"Properties": {}\n}\n]\n            """)\n            .build());\n\n    }\n}\n```\n```yaml\nresources:\n  task:\n    type: aws:emr:InstanceGroup\n    properties:\n      configurationsJson: |\n        [\n        {\n        "Classification": "hadoop-env",\n        "Configurations": [\n        {\n        "Classification": "export",\n        "Properties": {\n        "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"\n        }\n        }\n        ],\n        "Properties": {}\n        }\n        ]\n```\n<!--End PulumiCodeChooser -->',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ebsOptimized',
        'Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceType',
        'The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bidPrice',
        'If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterId',
        'ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'instanceCount',
        'target number of instances for the instance group. defaults to 0.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
