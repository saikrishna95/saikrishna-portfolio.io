import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Infosys (Goldman Sachs)",
      period: "Mar 2021 – Sep 2023",
      impact:
        "Automated ETL + shipped Power BI KPIs → –40% manual work, +30% accuracy, €100k+ savings.",
      highlights:
        "10+ dashboards · 100+ JIRA stories · Faster RCA via JIRA & ServiceNow.",
    },
    {
      title: "Engineer",
      company: "iConcept (Bayer Crop Science)",
      period: "Feb 2019 – Feb 2021",
      impact:
        "Live performance dashboards → –35% manual reporting, +15% process efficiency.",
      highlights:
        "Campaign analytics · Integration docs · Cross-functional delivery.",
    },
    {
      title: "Associate",
      company: "Knoah Solutions (Time Warner)",
      period: "Dec 2017 – Jan 2019",
      impact:
        "Automation & workflow tuning → –20% resolution time, +15% CSAT, +12% productivity.",
      highlights: "50k+ records analyzed · Trend detection · Ops improvements.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional Journey and Achievements
          </p>
        </div>

        {/* Experience cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-8 md:p-10 border border-border rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                      <Building2 className="w-5 h-5 text-accent" />
                      {exp.title} — {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-foreground/90">
                    <span className="font-semibold">Impact:</span> {exp.impact}
                  </p>
                  <p className="text-foreground/90">
                    <span className="font-semibold">Highlights:</span>{" "}
                    {exp.highlights}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
