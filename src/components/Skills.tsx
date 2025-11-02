import { Card } from "@/components/ui/card";
import { Code2, Cloud, Brain, Boxes } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: Code2,
    skills: [
      "SQL (MySQL, PostgreSQL, SQL Server)",
      "Python (Pandas, NumPy, Scikit-learn)",
      "Power BI",
      "Tableau",
      "Qlik",
      "Excel (Power Query, Pivot Tables)",
      "DAX",
      "GitHub",
      "Visual Studio Code",
      "Google Colab",
    ],
    color: "text-primary",
  },
  {
    title: "Cloud & Data Infrastructure",
    icon: Cloud,
    skills: [
      "Google Cloud Platform (BigQuery, Cloud Storage)",
      "Microsoft Azure",
      "AWS",
      "Informatica",
      "ETL Pipelines",
      "Data Modeling",
      "Data Governance",
    ],
    color: "text-accent",
  },
  {
    title: "Analytics & Machine Learning",
    icon: Brain,
    skills: [
      "Forecasting",
      "Anomaly Detection",
      "Predictive Analytics",
      "Reporting Automation",
      "KPI Tracking",
      "Exploratory Data Analysis (EDA)",
      "Data Validation",
      "Statistical Modeling",
    ],
    color: "text-primary",
  },
  {
    title: "Business & Project Tools",
    icon: Boxes,
    skills: [
      "JIRA",
      "Confluence",
      "ServiceNow",
      "Oracle",
      "Microsoft Dynamics 365",
      "Hyperion (familiar)",
      "Agile / Scrum",
      "Six Sigma",
    ],
    color: "text-accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills &amp; Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data-driven solutions and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="p-8 gradient-card border-border hover:shadow-lg transition-smooth group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${category.color} group-hover:scale-110 transition-bounce`}
                >
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
