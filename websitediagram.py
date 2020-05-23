from diagrams import Cluster, Diagram
from diagrams.aws.compute import ECS
from diagrams.aws.network import Route53, CF
from diagrams.aws.storage import S3
from diagrams.aws.management import Cloudformation
from diagrams.onprem.vcs import Github

with Diagram("NateGramer.com - S3 Backed Public Website", show=False):
    with Cluster("Development Branch Stack"):
        devDns = Route53("<branch>.NateGramer.com")
        devCloudfront = CF("CloudFront Distribution")
        devBucket = S3("Site Storage")
        devStack = [devDns,
                devCloudfront,
                devBucket]
        devDns >> devCloudfront >> devBucket
    
    Github("Pull in any Development Branch") >> Cloudformation("Branch Stack") >> devStack

    with Cluster("Master Branch Stack"):
        dns = Route53("NateGramer.com")
        cloudfront = CF("CloudFront Distribution")
        bucket = S3("Site Storage")
        stack = [dns,
                cloudfront,
                bucket]
        dns >> cloudfront >> bucket

    Github("Push in Master Branch") >> Cloudformation("Master Branch Template") >> stack