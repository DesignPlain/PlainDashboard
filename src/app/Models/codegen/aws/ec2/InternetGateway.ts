import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface InternetGatewayArgs {
  /*
A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --Note:-- It's recommended to denote that the AWS Instance or Elastic IP depends on the Internet Gateway. For example:

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const gw = new aws.ec2.InternetGateway("gw", {vpcId: main.id});
const foo = new aws.ec2.Instance("foo", {}, {
    dependsOn: [gw],
});
```
```python
import pulumi
import pulumi_aws as aws

gw = aws.ec2.InternetGateway("gw", vpc_id=main["id"])
foo = aws.ec2.Instance("foo", opts = pulumi.ResourceOptions(depends_on=[gw]))
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var gw = new Aws.Ec2.InternetGateway("gw", new()
    {
        VpcId = main.Id,
    });

    var foo = new Aws.Ec2.Instance("foo", new()
    {
    }, new CustomResourceOptions
    {
        DependsOn =
        {
            gw,
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ec2"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		gw, err := ec2.NewInternetGateway(ctx, "gw", &ec2.InternetGatewayArgs{
			VpcId: pulumi.Any(main.Id),
		})
		if err != nil {
			return err
		}
		_, err = ec2.NewInstance(ctx, "foo", nil, pulumi.DependsOn([]pulumi.Resource{
			gw,
		}))
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
import com.pulumi.aws.ec2.InternetGateway;
import com.pulumi.aws.ec2.InternetGatewayArgs;
import com.pulumi.aws.ec2.Instance;
import com.pulumi.aws.ec2.InstanceArgs;
import com.pulumi.resources.CustomResourceOptions;
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
        var gw = new InternetGateway("gw", InternetGatewayArgs.builder()
            .vpcId(main.id())
            .build());

        var foo = new Instance("foo", InstanceArgs.Empty, CustomResourceOptions.builder()
            .dependsOn(gw)
            .build());

    }
}
```
```yaml
resources:
  gw:
    type: aws:ec2:InternetGateway
    properties:
      vpcId: ${main.id}
  foo:
    type: aws:ec2:Instance
    options:
      dependson:
        - ${gw}
```
<!--End PulumiCodeChooser -->
*/
  tags?: Map<string, string>;

  // The VPC ID to create in.  See the aws.ec2.InternetGatewayAttachment resource for an alternate way to attach an Internet Gateway to a VPC.
  vpcId?: string;
}
export class InternetGateway extends DS_Resource {
  // The ARN of the Internet Gateway.
  public arn?: string;

  // The ID of the AWS account that owns the internet gateway.
  public ownerId?: string;

  /*
A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --Note:-- It's recommended to denote that the AWS Instance or Elastic IP depends on the Internet Gateway. For example:

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const gw = new aws.ec2.InternetGateway("gw", {vpcId: main.id});
const foo = new aws.ec2.Instance("foo", {}, {
    dependsOn: [gw],
});
```
```python
import pulumi
import pulumi_aws as aws

gw = aws.ec2.InternetGateway("gw", vpc_id=main["id"])
foo = aws.ec2.Instance("foo", opts = pulumi.ResourceOptions(depends_on=[gw]))
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var gw = new Aws.Ec2.InternetGateway("gw", new()
    {
        VpcId = main.Id,
    });

    var foo = new Aws.Ec2.Instance("foo", new()
    {
    }, new CustomResourceOptions
    {
        DependsOn =
        {
            gw,
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ec2"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		gw, err := ec2.NewInternetGateway(ctx, "gw", &ec2.InternetGatewayArgs{
			VpcId: pulumi.Any(main.Id),
		})
		if err != nil {
			return err
		}
		_, err = ec2.NewInstance(ctx, "foo", nil, pulumi.DependsOn([]pulumi.Resource{
			gw,
		}))
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
import com.pulumi.aws.ec2.InternetGateway;
import com.pulumi.aws.ec2.InternetGatewayArgs;
import com.pulumi.aws.ec2.Instance;
import com.pulumi.aws.ec2.InstanceArgs;
import com.pulumi.resources.CustomResourceOptions;
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
        var gw = new InternetGateway("gw", InternetGatewayArgs.builder()
            .vpcId(main.id())
            .build());

        var foo = new Instance("foo", InstanceArgs.Empty, CustomResourceOptions.builder()
            .dependsOn(gw)
            .build());

    }
}
```
```yaml
resources:
  gw:
    type: aws:ec2:InternetGateway
    properties:
      vpcId: ${main.id}
  foo:
    type: aws:ec2:Instance
    options:
      dependson:
        - ${gw}
```
<!--End PulumiCodeChooser -->
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC ID to create in.  See the aws.ec2.InternetGatewayAttachment resource for an alternate way to attach an Internet Gateway to a VPC.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\n> **Note:** It\'s recommended to denote that the AWS Instance or Elastic IP depends on the Internet Gateway. For example:\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst gw = new aws.ec2.InternetGateway("gw", {vpcId: main.id});\nconst foo = new aws.ec2.Instance("foo", {}, {\n    dependsOn: [gw],\n});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\ngw = aws.ec2.InternetGateway("gw", vpc_id=main["id"])\nfoo = aws.ec2.Instance("foo", opts = pulumi.ResourceOptions(depends_on=[gw]))\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var gw = new Aws.Ec2.InternetGateway("gw", new()\n    {\n        VpcId = main.Id,\n    });\n\n    var foo = new Aws.Ec2.Instance("foo", new()\n    {\n    }, new CustomResourceOptions\n    {\n        DependsOn =\n        {\n            gw,\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/ec2"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\tgw, err := ec2.NewInternetGateway(ctx, "gw", &ec2.InternetGatewayArgs{\n\t\t\tVpcId: pulumi.Any(main.Id),\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\t_, err = ec2.NewInstance(ctx, "foo", nil, pulumi.DependsOn([]pulumi.Resource{\n\t\t\tgw,\n\t\t}))\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.ec2.InternetGateway;\nimport com.pulumi.aws.ec2.InternetGatewayArgs;\nimport com.pulumi.aws.ec2.Instance;\nimport com.pulumi.aws.ec2.InstanceArgs;\nimport com.pulumi.resources.CustomResourceOptions;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        var gw = new InternetGateway("gw", InternetGatewayArgs.builder()\n            .vpcId(main.id())\n            .build());\n\n        var foo = new Instance("foo", InstanceArgs.Empty, CustomResourceOptions.builder()\n            .dependsOn(gw)\n            .build());\n\n    }\n}\n```\n```yaml\nresources:\n  gw:\n    type: aws:ec2:InternetGateway\n    properties:\n      vpcId: ${main.id}\n  foo:\n    type: aws:ec2:Instance\n    options:\n      dependson:\n        - ${gw}\n```\n<!--End PulumiCodeChooser -->',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'The VPC ID to create in.  See the aws.ec2.InternetGatewayAttachment resource for an alternate way to attach an Internet Gateway to a VPC.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
