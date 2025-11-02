import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
   
    {
      title: "Metaverse Transaction Anomaly Detection",
      description:
        "Machine learning project for detecting anomalous transactions in metaverse environments using advanced ML algorithms and pattern recognition.",
      github:
        "https://github.com/saikrishna95/metaverse_transaction_anamoly_dectection_ML_project",
      technologies: ["Python", "Machine Learning", "Data Science", "Anomaly Detection"],
    },
    {
      title: "ProdCo Sales Analysis",
      description:
        "Comprehensive sales analysis dashboard with SQL queries, Python analytics, and Power BI visualizations for business intelligence.",
      github: "https://github.com/saikrishna95/prodCo_sales_analysis_project",
      technologies: ["SQL", "Python", "Power BI", "Data Visualization"],
    },
    {
      title: "Performance of Vendor Analysis",
      description:
        "End-to-end vendor performance evaluation system using SQL data processing, Python analytics, and interactive Power BI reports.",
      github:
        "https://github.com/saikrishna95/Analysis_performance_vendor_sql_phyton_powerbi",
      technologies: ["SQL", "Python", "Power BI", "ETL"],
    },
    {
      title: "Six Sigma Yellow Belt – Process Improvement (DMAIC)",
      description:
        "Lean Six Sigma Yellow Belt project applying the DMAIC framework to reduce defects and cycle time. Includes problem definition, data collection, EDA, hypothesis testing, and control charts with measurable improvements.",
      github: "https://github.com/saikrishna95/Six_Sigma_project_Yellow_Belt",
      technologies: ["Excel", "Statistics", "DMAIC", "Hypothesis Testing", "Control Charts"],
    },
     {
      title: "AD Works – Sales & Profitability Analytics",
      description:
        "End-to-end BI project using the AdventureWorks dataset. Built SQL models and DAX measures, designed interactive Power BI dashboards for sales performance, product mix, geography, and profitability trends.",
      github: "https://github.com/saikrishna95/AD_works_project",
      technologies: ["SQL", "Power BI", "DAX", "Data Modeling", "ETL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data analytics and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="p-6 gradient-card border-border hover:shadow-xl transition-smooth group animate-fade-in flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-bounce">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-accent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
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

export default Projects;
