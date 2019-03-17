export default class BasePropsClass<T> { 
    public props: T;

    public constructor(props: T)
    {
        this.props = props;
    }
}