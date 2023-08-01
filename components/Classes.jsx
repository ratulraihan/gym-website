import ClassCard from "./ClassCard";
import Container from "./Container";

export default function Classes() {
    return (
        <div className="bg-gray-900">
            <Container>
                <h2 className="mb-8 text-5xl font-bold text-center text-lime-400">Our New Classes</h2>
                <p className="max-w-md mx-auto text-center text-gray-300">Fitness, in my best openion, is the key to a healthy life. It is not only about physical health but also about mental health. </p>
                <div className="grid grid-cols-4 mt-14 gap-x-8">
                    <ClassCard title="OUTDOOR CLASSES" image="/img/class3.jpg" />
                    <ClassCard title="PERSONAL TRAINING" image="/img/class2.jpg" />
                    <ClassCard title="DROP TRAINING" image="/img/class5.jpg" />
                    <ClassCard title="DIGITAL TRAINING" image="/img/class4.jpg" />
                </div>
            </Container>
        </div >
    )
}