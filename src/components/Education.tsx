import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MSc in Business Analytics",
      institution: "Dublin Business School",
      location: "Ireland",
      year: "2024",
      type: "Master's Degree"
    },
    {
      degree: "B.Tech in Electronics & Communication",
      institution: "JNTU",
      location: "India",
      year: "2016",
      type: "Bachelor's Degree"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <Card 
              key={idx}
              className="p-8 gradient-card border-border hover:shadow-xl transition-smooth group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-bounce">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-2">
                      {edu.type}
                    </span>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-xl text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
