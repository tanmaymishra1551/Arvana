// components/Footer.jsx
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    Services: ['Web', 'Android', 'iOS', 'Consulting'],
    Company: ['About', 'Team', 'Careers', 'Contact'],
    Resources: ['Blog', 'Case Studies', 'Docs'],
    Legal: ['Privacy', 'Terms', 'Cookies'],
  };

  const socials = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  return (
    <footer id="footer" data-section-color="#0a0a0a" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div whileHover={{ scale: 1.02 }}>
              Logo
            </motion.div>
            <p>Tagline</p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <SocialLink key={social.name} {...social} />
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <FooterLink label={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex justify-between">
          <p>© 2024 Studio.dev</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }) {
  return (
    <motion.a
      href="#"
      whileHover={{ x: 2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {label}
    </motion.a>
  );
}

function SocialLink({ name, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.a>
  );
}