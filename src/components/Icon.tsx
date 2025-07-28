interface IconData {
  [key: string]: string;
}

const iconData: IconData = {
  'address': 'bi bi-geo',
  'email': 'bi bi-envelope',
  'linkedin': 'fa-brands fa-linkedin',
  'github': 'fa-brands fa-github',
  'google-scholar': 'fa-brands fa-google-scholar',
  'orcid': 'fa-brands fa-orcid',
  'leetcode': 'fa-solid fa-code',
  'pri-sec': 'bi bi-shield-lock',
  'machine-learning': 'bi bi-robot',
  'cryptography': 'bi bi-lock',
  'distributed-system': 'bi bi-cloud-arrow-up',
  'programming': 'bi bi-code-square',
  'blockchain': 'bi bi-currency-bitcoin',
  'machine-learning-lib': 'bi bi-wrench',
  'zkp': 'bi bi-card-checklist'
};

function Icon({name, className}: {name: string, className: string}) {
  const iconClassName = name in iconData ? iconData[name] : '?';
  const finalClassName = `${iconClassName} ${className}`;

  return (
    <i className={finalClassName} aria-label={name}></i>
    // <i className="material-icons md-18 align-middle me-1" style={{ fontSize: '1.4rem', lineHeight: 1 }}>school</i>
  );
}

export default Icon;