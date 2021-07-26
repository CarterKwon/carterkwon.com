variable "aws_region" {
  description = "The AWS region to create resources in."
  default     = "us-east-1"
}

variable "commit_hash" {
  description = "The commit hash to be used as an identifier."
}
