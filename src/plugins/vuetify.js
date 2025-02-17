import 'vuetify/styles'
import '@/assets/styles.scss'
import { createVuetify } from 'vuetify'

export default createVuetify({
	theme: {
		defaultTheme: 'light',
		themes: {
			light: {
				colors: {
					background: "#000000"
				}
			}
		}
	},
})
