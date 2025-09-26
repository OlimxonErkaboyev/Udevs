import ApplicationSection from '../../app/sections/application/ApplicationSection'
import Clients from '../../app/sections/clients/ClientsSection'
import ConsultingSection from '../../app/sections/consulting/consultingSection'
import Contact from '../../app/sections/contactUS/contactUs'
import Design from '../../app/sections/design/DesignSection'
import HeroSection from '../../app/sections/hero/heroSection'
import Work from '../../app/sections/howToWeWork/howToWeWork'
import OptimizationSection from '../../app/sections/optimization/optimizationSection'
import Projects from '../../app/sections/projects/projects'
import ServicesSection from '../../app/sections/services/servicesSection'
import SystemsSection from '../../app/sections/systems/SystemsSection'
import Team from '../../app/sections/team/Team'
import Tools from '../../app/sections/tools/ToolsSection'

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<Team />
			<ApplicationSection />
			<SystemsSection />
			<Design />
			<OptimizationSection />
			<ConsultingSection />
			<Tools />
			<Clients />
			<Projects />
			<Work />
			<Contact />
		</>
	)
}

export default HomePage
