# Cloud Storage
## Features
1. Upload files
2. Download files
3. Remove files
4. Folders
5. Share
6. Edit

## Functional Requirements
Scale is going to be an issue esp since people can upload tons of stuff

- Features to support
   - Upload
   - Download
   - Remove
- Users
  - 200M users
  - 50m free -> 15GB paid
    - 15PB if 200M users active
    - Distributed & replicated
- Throughput
  - 2 files / day @ 10MB
  - Read / Write -> 2:1
- Always available

## System
- Data model
  - Files
    - Filename
    - Must be persistant
      - Options
        - File System [Apache Hadoop](https://hadoop.apache.org/)
          - Stored in hierarchy (files etc)
          - Less Scaleable
          - Can edit
        - Obejct Store - [Cloud Object Storage](https://aws.amazon.com/s3/) (best for this usecase)
          - Cannot edit files
          - Flat data structure
          - Multi region replication
  - Metadata
- App server
  - Object store
  - Cache
  - Key value store
