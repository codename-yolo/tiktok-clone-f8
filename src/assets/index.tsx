const svgFiles = import.meta.glob('./images/*.svg');

const importAll = async (context: any) => {
    const icons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {};
    const keys = Object.keys(context);
    const modules = await Promise.all(keys.map((item) => context[item]()));

    keys.forEach((key: any, index: any) => {
        const iconName = key.match(/\/(\w+)\.\w+$/)[1];
        const formattedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1) + 'Icon';
        const finalIconName = formattedIconName;

        const iconComponent = modules[index].ReactComponent;

        icons[finalIconName] = iconComponent;
    });

    return icons;
};

const icons = await importAll(svgFiles);

export default icons;
