import { getContact, getResearchInterests, getSkills } from '../api/contact';
import avatarUrl from '../assets/portfolio-avatar.jpg';
import Icon from './Icon';

function Hero() {
  const researchInterests = getResearchInterests();
  const contact = getContact();
  const skills = getSkills();

  return (
    <div className="row g-5 py-5">
        <div className="col-4">
          <img src={avatarUrl} className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" loading="lazy"  width={400} height={400} />
        </div>
        <div className="col-8">
          <h1 className="display-5 fw-normal text-body-emphasis lh-1 mb-3">
            {contact.prefix}. {contact.name}
          </h1>
          <h5 className="text-body-secondary">
            {contact.position} at the <a href={contact.affiliation.url} className="text-decoration-none">{contact.affiliation.name}</a>
          </h5>
          {contact.description.map(text => (
            <p className="lead">
              {text}
            </p>
          ))}
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div className='col-md-4'>
              <h4 className="fw-normal">Research Interests</h4>
              <ul className="lead list-unstyled">
                {researchInterests.map(topic => (
                  <li>
                    <Icon name={topic.icon} className='me-1'/>
                    <a href="#" className="text-body text-decoration-none">{topic.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-md-8'>
              <h4 className="fw-normal">Skills</h4>
              <ul className="lead list-unstyled">
                {skills.map(topic => (
                  <li>
                    <Icon name={topic.icon} className='me-1' />
                    {topic.title}:{' '}
                    {topic.subSkills.map(subTopic => subTopic.title).join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Hero;