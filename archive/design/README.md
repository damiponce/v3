# Design archive

The design gallery was removed from the website. This folder preserves its
original routes, components, metadata, translations, and images under their
original repository-relative paths. `lib/utils.ts` is a reference snapshot of
the shared utilities before the gallery-specific types and state were removed.

Nothing here is under the live `public` or `pages` directories. The archive is
excluded from TypeScript compilation and is not imported by the application.
The old design URLs and asset URLs now return 404 after a fresh deployment.

The files remain tracked in Git. This prevents website access, but does not
make them confidential if the repository itself is public.

`SHA256SUMS.json` records the original paths and hashes of all moved files.
To restore the gallery, move the archived paths back to the repository root,
merge the needed utilities from the reference snapshot, and restore navigation.
