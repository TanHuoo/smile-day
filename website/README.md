# Smile Day Public Website

Static public website for Smile Day. It contains product information, public legal documents, and partner authorization materials. The private application source code is intentionally excluded.

## Preview

```bash
cd website
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Published pages

- `/`: product website
- `/docs/`: public document hub
- `/authorization/`: partner authorization certificate and source document
- `/privacy/`: privacy policy
- `/terms/`: terms of service

GitHub Pages publishes this directory through `.github/workflows/pages.yml`.
