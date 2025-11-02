import { Card } from "@/components/ui/card";
import { Trophy, Star, Award, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Excellence in Problem Solving",
      company: "Goldman Sachs",
      description: "Stakeholder recognition for exceptional analytical skills and innovative solutions at Infosys",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "CEO-Level Recognition",
      company: "iConcept",
      description: "CEO-level appreciation for outstanding product insight presentation and strategic contributions",
      icon: Star,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Top Performer",
      company: "Knoah Solutions",
      description: "Achieved 'Top Performer' status for 6 consecutive months demonstrating consistent excellence",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for excellence and consistent high performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, idx) => (
            <Card 
              key={idx}
              className="p-8 gradient-card border-border hover:shadow-xl transition-smooth group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-center space-y-4">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-bounce`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-accent font-semibold">{achievement.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
