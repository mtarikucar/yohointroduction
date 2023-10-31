import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

function Icon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${isOpen ? "rotate-180" : ""} h-5 w-5 transition-transform `}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function AccordionCustom() {
  const [openIndex, setOpenIndex] = React.useState(null);
  const [activeHash, setActiveHash] = React.useState(window.location.hash);
  const { t } = useTranslation();

  const accordionItems = t('navListMenu.sections', { returnObjects: true });

  React.useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      {accordionItems.map(({ title, items }, idx) => (
        <Accordion key={idx} open={openIndex === idx}>
          <AccordionHeader onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="border-none">
            <Typography className="text-sm font-bold">
              {title}
            </Typography>
            <Icon isOpen={openIndex === idx} />
          </AccordionHeader>
          <AccordionBody>
            {items.map(({ title: itemTitle, route }) => (<>
              <a key={itemTitle} href={`#${title}`} className={`ml-3 my-2 block ${activeHash === `#${title}` ? 'underline' : ''}`}>
                {itemTitle}
              </a>
              <hr />
            </>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
