import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, FileText } from "lucide-react";
import resumeFile from "@/assets/SAI_KRISHNA_SAJJANAM_Analyst - Google Docs.pdf";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let’s connect and explore how I can help with your data analytics initiatives
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {/* Email Card */}
          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:sai.newmailbox@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  sai.newmailbox@gmail.com
                </a>
              </div>
            </div>
          </Card>

          {/* Phone Card */}
          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+353899475088"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  +353 899 475 088
                </a>
              </div>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sai-krishna-sajjanam-52118ba3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  linkedin.com/in/sai-krishna-sajjanam-52118ba3
                </a>
              </div>
            </div>
          </Card>

          {/* Resume Download Card */}
          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-3">Download Resume</h3>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => window.open(resumeFile, "_blank")}
                >
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-smooth" />
                  Download CV
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
