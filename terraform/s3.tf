resource "aws_s3_bucket" "website_bucket" {
  bucket = "carterkwon.com-${terraform.workspace}"
  acl    = "private"
  tags   = var.tags
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    sid    = "GetObjects"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.website.iam_arn]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.website_bucket.arn}/*"
    ]
  }
}

resource "aws_s3_bucket_policy" "s3_access_policy" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}