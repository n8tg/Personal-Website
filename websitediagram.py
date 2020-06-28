from diagrams import Cluster, Diagram
from diagrams.aws.compute import ECS
from diagrams.aws.network import Route53, CF
from diagrams.aws.storage import S3
from diagrams.aws.management import Cloudformation
from diagrams.onprem.vcs import Github
from diagrams.onprem.network import Internet

with Diagram("NateGramer.com - S3 Backed Public Website", show=False):
    with Cluster("Feature Branch Stack"):
        featureDns = Route53("<branch>.NateGramer.com")
        featureCloudfront = CF("CloudFront Distribution")
        featureBucket = S3("Site Storage")
        featureStack = [featureDns,
                featureCloudfront,
                featureBucket]
        featureDns >> featureCloudfront >> featureBucket
    
    Github("Pull in any feature branch") >> Cloudformation("Branch Stack") >> featureStack
    Internet() >> featureDns

    with Cluster("Dev Branch Stack"):
        devDns = Route53("dev.NateGramer.com")
        devCloudfront = CF("CloudFront Distribution")
        devBucket = S3("Site Storage")
        devStack = [devDns,
                devCloudfront,
                devBucket]
        devDns >> devCloudfront >> devBucket
    
    Github("Push in Dev Branch") >> Cloudformation("Branch Stack") >> devStack
    Internet() >> devDns

    with Cluster("Master Branch Stack"):
        dns = Route53("NateGramer.com")
        cloudfront = CF("CloudFront Distribution")
        bucket = S3("Site Storage")
        stack = [dns,
                cloudfront,
                bucket]
        dns >> cloudfront >> bucket
        
    Github("Push in Master Branch") >> Cloudformation("Master Branch Stack") >> stack
    Internet() >> dns