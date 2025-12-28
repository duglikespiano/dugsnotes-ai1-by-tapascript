import Header from './Header';
import CodeExplainForm from '../components/forms/CodeExplainForm';

function CodeEntry() {
	return (
		<div className="min-h-screen flex flex-col items-center p-6">
			<Header />
			<CodeExplainForm />
		</div>
	);
}

export default CodeEntry;
